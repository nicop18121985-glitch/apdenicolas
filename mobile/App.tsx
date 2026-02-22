import { registerRootComponent } from 'expo';
import MobileDashboard from './src/screens/Dashboard';

function App() {
  return <MobileDashboard />;
}

registerRootComponent(App);
