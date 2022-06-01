import Home from "./pages/home/Home";
import Logout from "./pages/login/Login";
import Store from "./pages/Stores/storeMap";
import StoreTable from "./pages/Stores/StoreTable";
import FleetMap from "./pages/FleetMap/FleetMap";
import DeviceListe from "./pages/FleetMap/Deviceliste";
import DeviceInfo from "./pages/FleetMap/DevicesInfo";
import InventoryListe from "./pages/inventory/Inventory";
import { HashRouter, Routes, Route } from "react-router-dom";
function App() {

  return (
    
      <HashRouter>
        <Routes>
          <Route path="/">
            <Route  path="/" index element={<Home />} />
            <Route path="logout" element={<Logout />} />
            <Route path="fleet" element={<FleetMap />}/>
            <Route path="store" element={<Store />}/>
            <Route path="storetable" element={<StoreTable />}/>
            <Route path="devicelist" element={<DeviceListe/>} />
            <Route path="deviceinfo" element={<DeviceInfo/>}/>
            <Route path="inventory" element={<InventoryListe/>}/>
            </Route>
        </Routes>
      </HashRouter>
   
  );
}

export default App;
