import './home.scss';
import { Topbar, Leftbar, Feed, Rightbar } from '../../components';

function Home() {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Leftbar />
        <Feed />
        <Rightbar />
      </div>
    </>
  );
}

export default Home;
