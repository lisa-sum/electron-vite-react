import Register from "./pages/Register";
import Login from "./pages/Login";
import {Grid} from "@nextui-org/react";

export default function App() {

	return (
		<Grid.Container gap={3}>
			<Grid>
				<Register/>
			</Grid>
			<Grid>
				<Login/>
			</Grid>
		</Grid.Container>
	)
}