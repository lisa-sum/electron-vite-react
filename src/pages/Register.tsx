import {ChangeEvent, useState} from "react";
import {Button, FormElement, Grid, Input} from "@nextui-org/react";


export default function Register() {
	const [usr, setUsr] = useState<string>("")
	const [pwd, setPwd] = useState<string>("")
	const [btn, setBtn] = useState<boolean>(false)

	const register = (usr: string, pwd: string) => {
		fetch(`http://localhost:8080/douyin/user/register/username=${usr}&password=${pwd}`, {
			method: "POST",
		}).then(r => {
			if (r.ok) {
				setBtn(false)
				return r.json()
			}
			setBtn(false)
			throw new Error("Error")
		}).then(data => {
			console.log(data)
		}).catch(e => {
			console.error(e)
		})
	}
	return (
		<Grid.Container gap={2} justify="center">
			<Grid md>
				<Input
					clearable
					bordered
					labelPlaceholder="用户名"

					type="text"
					name="username"
					onChange={(e: ChangeEvent<FormElement>) => setUsr(e.target.value)}
				/>
			</Grid>
			<Grid md>
				<Input.Password
					clearable
					bordered
					labelPlaceholder="密码"

					type="password"
					name="password"
					onChange={(e: ChangeEvent<FormElement>) => setPwd(e.target.value)}
				/>
			</Grid>
			<Grid md>
				<Button
					shadow
					color="gradient"
					auto
					disabled={btn}
					onClick={() => {
						setBtn(true)
						register(usr, pwd)
					}}
				>
					Register
				</Button>
			</Grid>
		</Grid.Container>
	);
}