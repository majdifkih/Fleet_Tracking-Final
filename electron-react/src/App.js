import Home from "./pages/home/Home";
import Store from "./pages/Stores/storeMap";
import StoreTable from "./pages/Stores/StoreTable";
import FleetMap from "./pages/FleetMap/FleetMap";
import DeviceListe from "./pages/FleetMap/Deviceliste";
import DeviceInfo from "./pages/FleetMap/DevicesInfo";
import InventoryListe from "./pages/inventory/Inventory";
import { HashRouter, Routes, Route,BrowserRouter } from "react-router-dom";
import ProviderTable from "./pages/Provider/Provider";
import ClientTable from "./pages/Client/Client";
import DriverTable from "./pages/Driver/Driver";
import UserTable from "./pages/User/User";
import Facture from "./pages/Facture/Facture";
import DeliveryListe from "./pages/Delivery/Deliveryliste";
import DemandTable from "./pages/Demand/Demand";
import Login from "./pages/login/Login";
import Logout from "./pages/login/logout";
import InfoDemand from "./pages/Demand/InfoDemand";
import StockVehicle from "./pages/Vehicle/stockVehicle";
import InfoFacture from "./pages/Facture/FactureInfo";
import CourbeTest from "./components/testcourbe/testpage";

function App() {


  return (
    
      <HashRouter >
        
        <Routes>
          <Route exact path="/" element={<Login />} />
            <Route path="/">
            <Route path="home" index element={<Home />} />
            <Route path="fleet/:lat/:lon" exact element={<FleetMap />}/>
            <Route path="store/:lat/:lon" element={<Store />}/>
            <Route path="storetable" element={<StoreTable />}/>
            <Route path="devicelist" element={<DeviceListe/>} />
            <Route path="providerlist" element={<ProviderTable/>}/>
            <Route path="deviceinfo" element={<DeviceInfo/>}/>
            <Route path="inventory" element={<InventoryListe/>}/>
            <Route path="clients" element={<ClientTable/>}/>
            <Route path="drivers" element={<DriverTable/>}/>
            <Route path="users" element={<UserTable />}/>
            <Route path="facture" element={<Facture/>}/>
            <Route path="delivery" element={<DeliveryListe/>}/>
            <Route path="demand" element={<DemandTable/>}/>
            <Route path="infodemand" element={<InfoDemand/>}/>
            <Route path="logout" element={<Logout/>} />
            <Route path="stockvehicle/:id" element={<StockVehicle/>}/>
            <Route path="infofacture" element={<InfoFacture/>}/>
            <Route path="courbe" element={<CourbeTest/>}/>
            </Route> 
        </Routes>
        
      </HashRouter>

 
  );
}

export default App;
