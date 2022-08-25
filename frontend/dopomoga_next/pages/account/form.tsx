import type { NextPage } from "next";
import AccountForm from '../../components/Account/AccountForm'

const Home: NextPage = () => {
  return (
    <section class="my-5">
        <div className="container">
            <AccountForm />
        </div>
    </section>
  );
};

export default Home;
