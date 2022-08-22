import './index.css';
import { ReactComponent as ManageSvg } from "../../../access/icons/manage.svg";
import { ReactComponent as ChatSvg } from "../../../access/icons/chat.svg";
import { ReactComponent as UserSvg } from "../../../access/icons/user.svg";

const SignInFeature = () => {
    return (
        <>
          <section>
            <div className="container">
            <div class="lft">
      <div class="lft__manage">
        <div class="lft__img">
          <ManageSvg />
        </div>
        <div class="lft__dscr">
          <h3 class="lft__title">Manage Your Ads</h3>
          <p class="lft__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam commodo vel ligula.</p>
        </div>
      </div>
      <div class="lft__chat">
        <div class="lft__img">
          <ChatSvg />
        </div>
        <div class="lft__dscr">
          <h3 class="lft__title">Chat & Messaging with Anyone, Anytime</h3>
          <p class="lft__subtitle">Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos.</p>
        </div>
      </div>
      <div class="lft__user">
        <div class="lft__img">
          <UserSvg/>
        </div>
        <div class="lft__dscr">
          <h3 class="lft__title">245,365 Verified User</h3>
          <p class="lft__subtitle">Maecenas ornare mauris vitae purus vestibulum, vel tincidunt tortor convallis.</p>
        </div>
      </div>
    </div>
            </div>
          </section>
        </>
    )
}

export default SignInFeature;