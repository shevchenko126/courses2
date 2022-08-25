import type { NextPage } from "next";
import SignInFeature from '../components/Login/SignInFeature'
import SignUpForm from '../components/Login/SignUpForm'

const Home: NextPage = () => {
  return (
    <section class="my-5">
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <SignInFeature />
                </div>
                <div className="col-6">
                    <SignUpForm />
                </div>
            </div>
        </div>
    </section>
  );
};

export default Home;
