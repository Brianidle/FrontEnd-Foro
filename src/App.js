import "./App.css";
import Pages from "./pages/index";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache
} from '@apollo/client';


const uri = "http://localhost:4000/foroApi";
const cache = new InMemoryCache();

const client = new ApolloClient({
  uri,
  cache,
  connectToDevTools: true
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Pages />
    </ApolloProvider>
  );
}

export default App;
