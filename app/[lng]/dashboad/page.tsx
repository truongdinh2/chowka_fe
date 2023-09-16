"use client"

import { AppLink } from "@/ui/common/link"
import MultiSelect from "@/ui/common/selectGroup"
import { Textarea } from "@/ui/common/textarea"

// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
export default function Page() {
  return (
    <>
      <AppLink linkName="/dashboad/login"></AppLink>
      <h1>Hello, Dashboard Page!</h1>
      <div className="row">
        <div className="col-md-12">
          <MultiSelect />
          <Textarea value={"hihihiihihi"}/>
          <h1 className="display-4">Hello, world!</h1>
          <p className="lead">
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <hr className="my-4" />
          <p>
            It uses utility classes for typography and spacing to space content
            out within the larger container.
          </p>
          <a className="btn btn-primary btn-lg" href="#" role="button">
            Learn more
          </a>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <h1 className="display-4">Hello, world!</h1>
          <p className="lead">
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <hr className="my-4" />
          <p>
            It uses utility classes for typography and spacing to space content
            out within the larger container.
          </p>
          <a className="btn btn-primary btn-lg" href="#" role="button">
            Learn more
          </a>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <h1 className="display-4">Hello, world!</h1>
          <p className="lead">
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <hr className="my-4" />
          <p>
            It uses utility classes for typography and spacing to space content
            out within the larger container.
          </p>
          <a className="btn btn-primary btn-lg" href="#" role="button">
            Learn more
          </a>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <h1 className="display-4">Hello, world!</h1>
          <p className="lead">
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <hr className="my-4" />
          <p>
            It uses utility classes for typography and spacing to space content
            out within the larger container.
          </p>
          <a className="btn btn-primary btn-lg" href="#" role="button">
            Learn more
          </a>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <h1 className="display-4">Hello, world!</h1>
          <p className="lead">
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <hr className="my-4" />
          <p>
            It uses utility classes for typography and spacing to space content
            out within the larger container.
          </p>
          <a className="btn btn-primary btn-lg" href="#" role="button">
            Learn more
          </a>
        </div>
      </div>
    </>
  )
}
