import {useState} from "react";
import {Button, Grid, Input} from "@nextui-org/react";

type UserResponse = {
	username: string
	password: string
	token: string
	status_code: number // 状态码，0-成功，其他值-失败
	status_msg: string; // 返回状态描述
}
export default function Login() {
	const [usr, setUsr] = useState<string>("")
	const [pwd, setPwd] = useState<string>("")

	const [btn, setBtn] = useState<boolean>(false)
	const login = (usr: string, pwd: string) => {
		fetch(`http://localhost:8080/douyin/user/login/username=${usr}&password=${pwd}`, {
			method: "POST",
			headers: {"Content-Type": "application/json"},
		}).then(r => {
			if (r.ok) {
				setBtn(false)
				return r.json()
			}
			setBtn(false)
			throw new Error("Error")
		}).then((data: UserResponse) => {
			console.log(data)
			if (usr === data.username && pwd === data.password) {
				window.alert("恭喜你, 登录成功!!!!")
				localStorage.setItem("token", data.token)
				return
			}
			window.alert("恭喜你, 登录失败!!!!")
		}).catch(e => {
			console.error(e)
		})
	}
	return (
		<Grid.Container gap={2} justify="center">
			<Grid md={4}>
				<Input
					clearable
					bordered
					labelPlaceholder="用户名"

					type="text"
					name="username"
					onChange={(e) => setUsr(e.target.value)}
				/>
			</Grid>
			<Grid md={4}>
				<Input.Password
					clearable
					bordered
					labelPlaceholder="密码"
					type="password"
					name="password"
					onChange={(e) => setPwd(e.target.value)}
				/>
			</Grid>
			<Grid md={4}>
				<Button
					shadow
					color="gradient"
					auto
					disabled={btn}
					onClick={() => {
						setBtn(true)
						login(usr, pwd)
					}}
				>
					Login
				</Button>
			</Grid>
		</Grid.Container>
	);
}