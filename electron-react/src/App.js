import Home from "./pages/home/Home";
import Store from "./pages/Stores/storeMap";
import StoreTable from "./pages/Stores/StoreTable";
import FleetMap from "./pages/FleetMap/FleetMap";
import DeviceListe from "./pages/FleetMap/Deviceliste";
import DeviceInfo from "./pages/FleetMap/DevicesInfo";
import InventoryListe from "./pages/inventory/Inventory";
import { HashRouter, Routes, Route } from "react-router-dom";
import ProviderTable from "./pages/Provider/Provider";
import ClientTable from "./pages/Client/Client";
import DriverTable from "./pages/Driver/Driver";
import UserTable from "./pages/User/User";
import InfoDelivery from "./pages/infodelivery/InfoDelivery";
import DeliveryListe from "./pages/Delivery/Deliveryliste";
import DemandTable from "./pages/Demand/Demand";
import Login from "./pages/login/Login";
import InfoDemand from "./pages/Demand/InfoDemand";

function App() {

  return (
    
      <HashRouter>
        <Routes>
          <Route path="/">
            <Route  path="/" index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="fleet" element={<FleetMap />}/>
            <Route path="store" element={<Store />}/>
            <Route path="storetable" element={<StoreTable />}/>
            <Route path="devicelist" element={<DeviceListe/>} />
            <Route path="providerlist" element={<ProviderTable/>}/>
            <Route path="deviceinfo" element={<DeviceInfo/>}/>
            <Route path="inventory" element={<InventoryListe/>}/>
            <Route path="clients" element={<ClientTable/>}/>
            <Route path="drivers" element={<DriverTable/>}/>
            <Route path="users" element={<UserTable/>}/>
            <Route path="infodelivery" element={<InfoDelivery/>}/>
            <Route path="delivery" element={<DeliveryListe/>}/>
            <Route path="demand" element={<DemandTable/>}/>
            <Route path="infodemand" element={<InfoDemand/>}/>
            </Route>
        </Routes>
      </HashRouter>
   
  );
}

export default App;
