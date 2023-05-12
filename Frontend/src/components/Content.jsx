import React from 'react'

function Content() {
  return (
    <>
      <div className="block">
        <video
          autoPlay
          poster="https://cdn.sanity.io/images/3do82whm/next/c1681387f82e8e9e99921c49f5ac6fbd56ca5a9d-1734x1080.png?auto=format"
          loop=""
          playsinline=""
          height=""
          width="60%"
          src="blob:https://www.sanity.io/3b004181-df8a-4c17-b097-2527331978ae"
          className="block ms-72 mt-20"
        ></video>
      </div>
      <div>
        <p class="mt-28 text-center font-mono text-lg text-gray-700 md:text dark:text-gray-600">
          POWERING EXCEPTIONAL DIGITAL EXPERIENCES EVERYWHERE
        </p>
      </div>
      <div className="flex justify-center flex-wrap space-x-4 space-y-4">
        <img
          width={130}
          height={82}
          src="	https://www.sanity.io/static/images/client-logos/netlify.svg"
          alt=""
        />
        <img
          width={130}
          height={109}
          src="		https://www.sanity.io/static/images/client-logos/nike.svg"
          alt=""
        />
        <img
          width={130}
          height={101}
          src="	https://www.sanity.io/static/images/client-logos/figma.svg"
          alt=""
        />
        <img
          width={130}
          height={100}
          src="	https://www.sanity.io/static/images/client-logos/cloudflare.svg"
          alt=""
        />
        <img
          width={130}
          height={92}
          src="	https://www.sanity.io/static/images/client-logos/sonos.svg"
          alt=""
        />
        <img
          width={130}
          height={144}
          src="	https://www.sanity.io/static/images/client-logos/flex.svg"
          alt=""
        />
        <div class="w-full flex justify-center mt-6 space-x-16">
          <img
            width={130}
            height={107}
            src="	https://www.sanity.io/static/images/client-logos/movember.svg"
            alt=""
          />
          <img
            width={130}
            height={63}
            src=" https://www.sanity.io/static/images/client-logos/remarkable.svg"
            alt=""
          />
          <img
            width={130}
            height={57}
            src="	https://www.sanity.io/static/images/client-logos/conde_nast.svg"
            alt=""
          />
          <img
            width={130}
            height={67}
            src="	https://www.sanity.io/static/images/client-logos/skims.svg"
            alt=""
          />
          <img
            width={130}
            height={79}
            src="	https://www.sanity.io/static/images/client-logos/brex.svg"
            alt=""
          />
        </div>
      </div>
      <div className="mt-40 flex flex-wrap">
        <div className="w-full md:w-1/2">
          <p class="mb-5 ms-56 font-mono text-lg text-gray-700 md:text dark:text-gray-600">
            OVERVIEW
          </p>
          <h2 class="text-4xl font-bold dark:text-black ms-56">
            Create without <br /> compromise
          </h2>
          <p class=" mt-6 my-4 text-xl text-gray-500 font-semibold ms-56 ">
            Sanity is born out of the principles of <br /> customizability,
            composability, and treating <br /> content as data. Our solution
            enables businesses <br /> to build a content system tailored for
            their needs, <br /> backed by an unparalleled developer experience.
          </p>
          <a
            href="#"
            class="inline-flex items-center text-lg text-blue-600 dark:text-blue-500 hover:underline ms-56 mt-6"
          >
            Get Started <span style={{ color: "#2654ea" }}>&#8594;</span>
          </a>
        </div>
        <div className="mt-16 w-full md:w-1/2 content-start">
          <img
            width={600}
            height={100}
            src="https://cdn.sanity.io/images/3do82whm/next/55236b64b6509be5d1723a5f44a53fc4edcefd37-554x473.svg?h=473&fit=max&auto=format"
            alt=""
          />
        </div>
      </div>
      <div className="mt-40 flex flex-wrap">
        <div className="w-full md:w-1/3">
          <img
            className=" ms-48"
            src="https://cdn.sanity.io/images/3do82whm/next/116352f107390acb9adedca2f5fa25e0fc9812d0-25x25.svg"
            alt=""
          />
          <h2 class="text-3xl font-bold dark:text-black ms-56">
            Sanity studio
          </h2>
          <p class=" mt-4 my-4 text-xl text-gray-500 font-semibold ms-56 ">
            Collaborate and customize. Sanity <br /> Studio is a real-time
            toolkit for <br />
            creating efficient data-driven content <br /> appications.
          </p>
          <a
            href="#"
            class="inline-flex items-center text-lg text-blue-700 dark:text-blue-700 hover:underline ms-56 mt-2"
          >
            Read more about the Sanity Studio{" "}
            <span style={{ color: "#2654ea" }}>&#8594;</span>
          </a>
        </div>
        <div className="w-full md:w-1/3">
          <img
            className=" ms-20"
            src="https://cdn.sanity.io/images/3do82whm/next/9acbbd00b493d7ada94d0e5b74291bdabf723ec3-25x25.svg"
            alt=""
          />
          <h2 class="text-3xl font-bold dark:text-black ms-28">Content Lake</h2>
          <p class=" mt-4 my-4 text-xl text-gray-500 font-semibold ms-28">
            Use structured content to integrate <br /> across organizations and
            disciplines
            <br />
            assembling your infrastructure from
            <br />
            the best components.
          </p>
          <a
            href="#"
            class="inline-flex items-center text-lg text-blue-700 dark:text-blue-700 hover:underline mt-2 ms-28"
          >
            Explore the The Content Lake
            <span style={{ color: "#2654ea" }}>&#8594;</span>
          </a>
        </div>
        <div className="w-full md:w-1/3">
          <img
            src="https://cdn.sanity.io/images/3do82whm/next/aeca5f9fc38929d1eeece4d9aefbf06957b0bccc-25x25.svg"
            alt=""
          />
          <h2 class="text-3xl font-bold dark:text-black ms-7">APIs</h2>
          <p class=" mt-4 my-4 text-xl text-gray-500 font-semibold ms-7">
            We provide an API-centric solution <br />
            for companies to weave together <br /> external data sources and
            content <br />
            workflows to create experiences for <br /> any device, channel, or
            application.
          </p>
          <a
            href="#"
            class="inline-flex items-center text-lg text-blue-700 dark:text-blue-700 hover:underline mt-2 ms-7"
          >
            How we think about DX
            <span style={{ color: "#2654ea" }}>&#8594;</span>
          </a>
        </div>
      </div>
    </>
  );
}

export default Content