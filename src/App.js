import { useEffect, useState } from 'react';
import { ethers } from 'ethers';

// Components
import Home from './components/Home';
import Navigation from './components/Navigation';
import Search from './components/Search';


// ABIs
import RealEstate from './abis/RealEstate.json'
import Escrow from './abis/Escrow.json'

// Config
import config from './config.json';
import Navbar from './components/Navbar';

function App() {
  const [provider, setProvider] = useState(null)
  const [escrow, setEscrow] = useState(null)

  const [account, setAccount] = useState(null)

  const [homes, setHomes] = useState([])
  const [home, setHome] = useState({})
  const [toggle, setToggle] = useState(false);

  const loadBlockchainData = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    setProvider(provider)
    const network = await provider.getNetwork()

    const realEstate = new ethers.Contract(config[network.chainId].realEstate.address, RealEstate, provider)
    const totalSupply = await realEstate.totalSupply()
    const homes = []

    for (var i = 1; i <= totalSupply; i++) {
      const uri = await realEstate.tokenURI(i)
      const response = await fetch(uri)
      const metadata = await response.json()
      homes.push(metadata)
    }

    setHomes(homes)

    const escrow = new ethers.Contract(config[network.chainId].escrow.address, Escrow, provider)
    setEscrow(escrow)

    window.ethereum.on('accountsChanged', async () => {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      const account = ethers.utils.getAddress(accounts[0])
      setAccount(account);
    })
  }

  useEffect(() => {
    loadBlockchainData()
  }, [])

  const togglePop = (home) => {
    setHome(home)
    toggle ? setToggle(false) : setToggle(true);
  }

  return (
    <div>
      {/* <Navigation account={account} setAccount={setAccount} /> */}
      <Navbar account={account} setAccount={setAccount}/>
      {/* <Search /> */}
      <>
      <div class="bg-white py-6 sm:py-8 lg:py-12" id = "main">
        <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-8 md:mb-12">
            HOUSES FOR SALE
          </h2>
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 md:gap-6">
            {homes.map((home, idx) => (
              <>
                <div key = {idx} onClick={() => togglePop(home)}>
                  <a
                    href="#"
                    class="group h-96 flex items-end bg-gray-100 rounded-lg overflow-hidden shadow-lg relative p-4"
                  >
                    <img
                      src={home.image}
                      loading="lazy"
                      alt="Houses for rental"
                      class="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
                    />

                    <div class="w-full flex flex-col bg-white text-center rounded-lg relative p-4">
                      <span class="text-gray-500">{home.attributes[0].value} ETH</span>
                      <span class="text-gray-800 text-lg lg:text-xl font-bold">
                        {home.attributes[1].value}
                      </span>
                    </div>
                  </a>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>









      {toggle && (
        <Home home={home} provider={provider} account={account} escrow={escrow} togglePop={togglePop} />
      )}

    </div>
  );
}

export default App;
