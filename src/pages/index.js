import Image from "next/image"
import SvgSplash from "../components/SvgSplash"
import css from "./index.module.css"

export default function Home() {
  return (
    <>
      <div className="bg-orange py-8">
        <h2>hello</h2>
      </div>
      <div>
        <SvgSplash />
      </div>
      <div className={css.box}>
        <div>
          <h2>About</h2>
        </div>
        <div>
          <h2>Explore</h2>
        </div>
        <div>
          <h2>Create</h2>
        </div>
      </div>
      <div className={css.root}>
        <div>
          <h1>What is the Dream Builder?</h1>
          <p>
            The Dream Builder is an online tool to create your own digital dream
            board. <br />
            You can download your dream board to keep and, if you choose, share
            your dreams on the Dream Tapestry.
          </p>
        </div>
        <div>
          <h1>What is a dream board?</h1>
          <p>
            A dream board is a collage of images and text that represent your
            vision of the future.
          </p>
          <div className={css.squares}>
            <div>
              <h3>Your dream board is unique to you</h3>
            </div>
            <div className="bg-blue text-white">
              <h3>It can be comprehensive or have a specific theme</h3>
            </div>
            <div>
              <h3>We devise our own process to conjure our dreams</h3>
            </div>
          </div>
        </div>
        <div>
          <h1>About this project</h1>
          <p>
            The Dream Builder was created by Bearjam and commissioned by CIVIC
            SQUARE as part of the Dream Fund.
          </p>
          <div className={css.rectangle}>
            <div>
              <h3>About Bearjam</h3>
              <p>
                Bearjam is a designer-developer duo based in the West Midlands,
                UK. <br /> We make websites and digital experiences.
              </p>
            </div>
            <div>
              <h3>About the Dream Fund</h3>
              <p>
                "The Dream Fund exists to unlock and resource the bold,
                creative, regenerative dreams that are inside us and move them
                into the everyday consciousness of many."
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}