import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Store from "./pages/Stores/Stores";
import StoreTable from "./pages/Stores/StoreTable";
import FleetMap from "./pages/FleetMap/FleetMap";
import DeviceListe from "./pages/Devices/Deviceliste";
import DeviceInfo from "./pages/Devices/DevicesInfo";
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    
      <HashRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="logout" element={<Login />} />
            <Route path="fleet/map" element={<FleetMap />}/>
            <Route path="store" element={<Store />}/>
            <Route path="storetable" element={<StoreTable />}/>
            <Route path="devicelist" element={<DeviceListe/>} />
            <Route path="deviceinfo" element={<DeviceInfo/>}/>
            </Route>
        </Routes>
      </HashRouter>
   
  );
}

export default App;
