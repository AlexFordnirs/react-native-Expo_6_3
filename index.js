import { registerRootComponent } from 'expo';
import ContactsList from './ContactsList';
import Contact from './Contact';
export default ContactsList;
export {Contact};

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(ContactsList);
