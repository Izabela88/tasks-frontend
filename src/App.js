import TileList from "./components/TileList";
import React, { useState } from "react";

function App() {
  const [tiles, setTile] = useState([
    {
      id: "f0a1d8b9-6472-4710-894b-eea6faa4c22c",
      status: "PENDING",
      launch_date: "2023-04-04T13:29:19.225225Z",
      created_at: "2023-04-04T13:29:19.225155Z",
      modified_at: "2023-04-04T13:29:19.225198Z",
      tasks: [
        {
          id: "42241fbc-92f2-4044-9f28-e875de5d259b",
          tile_id: "f0a1d8b9-6472-4710-894b-eea6faa4c22c",
          created_at: "2023-04-04T13:38:05.127473Z",
          modified_at: "2023-04-04T13:38:05.127496Z",
          title: "Title 1",
          order: "Order 1",
          description:
            "ujubes liquorice lollipop marzipan fruitcake soufflé croissant soufflé. Tootsie roll lollipop donut dessert caramels jelly chupa chups gummi bears. Cheesecake ice cream cotton candy gingerbread icing tootsie roll macaroon. Dragée jujubes shortbread sweet roll marshmallow dragée cupcake cake. Cheesecake ice cream",
          task_type: "survey",
        },
        {
          id: "42241fbc-92f2-4044-9f28-e875de5d259c",
          tile_id: "f0a1d8b9-6472-4710-894b-eea6faa4c22c",
          created_at: "2023-04-03T13:38:05.127473Z",
          modified_at: "2023-04-03T13:38:05.127496Z",
          title: "Title 2",
          order: "Order 2",
          description:
            "ujubes liquorice lollipop marzipan fruitcake soufflé croissant soufflé. Tootsie roll lollipop donut dessert caramels jelly chupa chups gummi bears. Cheesecake ice cream cotton candy gingerbread icing tootsie roll macaroon. Dragée jujubes shortbread sweet roll marshmallow dragée cupcake cake. Cheesecake ice cream",
          task_type: "survey",
        },
      ],
    },
    {
      id: "9992a1ea-cc37-456d-93ea-bba3018c7bce",
      status: "LIVE",
      launch_date: "2023-04-04T13:29:25.878521Z",
      created_at: "2023-04-04T13:29:25.878497Z",
      modified_at: "2023-04-04T13:29:25.878515Z",
      tasks: [
        {
          id: "70ea78e6-da8f-41c0-b4d2-57eb35909ab5",
          tile_id: "9992a1ea-cc37-456d-93ea-bba3018c7bce",
          created_at: "2023-04-04T13:42:07.080668Z",
          modified_at: "2023-04-04T13:42:07.080720Z",
          title: "Title 2",
          order: "Order 2",
          description:
            "Caramels marzipan powder wafer cupcake cookie. Biscuit tootsie roll gummies jelly-o danish tart tiramisu cheesecake. Jelly-o bear claw shortbread jelly beans macaroon cupcake. Sugar plum soufflé caramels oat cake muffin cupcake pie jelly-o soufflé. Biscuit sweet chupa chups croissant icing chocolate bar tiramisu liquorice. Macaroon chocolate bar pastry liquorice sugar plum marzipan lollipop. Bonbon jujubes danish liquorice chupa chups. Brownie pudding powder jelly-o jelly beans muffin.",
          task_type: "discussion",
        },
      ],
    },
    {
      id: "aae313fb-f456-475d-b03e-979ec796366f",
      status: "ARCHIVED",
      launch_date: "2023-04-04T13:29:30.448295Z",
      created_at: "2023-04-04T13:29:30.448253Z",
      modified_at: "2023-04-04T13:29:30.448284Z",
      tasks: [
        {
          id: "d8ef0b0a-edff-47aa-8312-0d39a1c37ce4",
          tile_id: "aae313fb-f456-475d-b03e-979ec796366f",
          created_at: "2023-04-04T13:43:06.461271Z",
          modified_at: "2023-04-04T13:43:06.461291Z",
          title: "Title 3",
          order: "Order 3",
          description:
            "Cotton candy bear claw lollipop candy canes cake chocolate macaroon. Sweet gummi bears dragée jelly wafer. Jelly beans jelly-o bear claw cookie marshmallow dessert macaroon. Jelly jelly-o sweet roll chocolate cake shortbread powder candy canes toffee cookie. Gummies ice cream carrot cake cake candy canes cake. Gummies donut gummies tootsie roll cotton candy jelly beans. Tootsie roll chocolate bar chupa chups danish cupcake jelly wafer. Pie ice cream wafer jelly beans sweet dessert. Cupcake soufflé oat cake croissant lemon drops powder. Pudding carrot cake bonbon chocolate cake cake chocolate bar lemon drops gummi bears fruitcake.",
          task_type: "diary",
        },
      ],
    },
  ]);

  return (
    <div>
      <TileList tiles={tiles} />
      <div className="container mt-5"></div>
    </div>
  );
}

export default App;
