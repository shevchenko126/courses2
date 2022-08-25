import Image from "next/image"

const SignInFeature = () => {

    const features = [
        {
            title:"Manage Your Ads",
            subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam commodo vel ligula.",
            image:"/images/icons/manage.svg",
            type:"manage"
        },
        {
            title:"Chat & Messaging with Anyone, Anytime",
            subtitle: "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
            image:"/images/icons/chat.svg",
            type:"chat"
        },
        {
            title:"245,365 Verified User",
            subtitle: "Maecenas ornare mauris vitae purus vestibulum, vel tincidunt tortor convallis.",
            image:"/images/icons/user.svg",
            type:"user"
        },
    ]

    return (
        <>
        <section>
          <div className="container">
              <div class="">
                    { features.map((feature, i)=>(
                        <div class={`lft__${feature.type}`}>
                          <div class="lft__img">
                              <Image src={feature.image} width="80" height="80" />
                          </div>
                          <div class="lft__dscr">
                              <h3 class="lft__title">{feature.title}</h3>
                              <p class="lft__subtitle">{feature.subtitle}</p>
                          </div>
                        </div>
                    )) }
              </div>
          </div>
        </section>


        </>
    )
}

export default SignInFeature;
