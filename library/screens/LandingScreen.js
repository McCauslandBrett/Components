import React from "react"
import { Animated, Easing, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { LinearGradient } from "expo-linear-gradient"


export default class LandingScreen extends React.Component {

	static navigationOptions = ({ navigation }) => {

		const { params = {} } = navigation.state
		return {
				header: null,
				headerLeft: null,
				headerRight: null,
			}
	}

	constructor(props) {
		super(props)
		this.state = {
			logoImageScale: new Animated.Value(-1),
			logoImageOpacity: new Animated.Value(-1),
		}
	}

	componentDidMount() {

		this.startAnimationOne()
	}

	onLogInPressed = () => {

	}

	onSignUpPressed = () => {

	}

	startAnimationOne() {

		// Set animation initial values to all animated properties
		this.state.logoImageScale.setValue(0)
		this.state.logoImageOpacity.setValue(0)

		// Configure animation and trigger
		Animated.parallel([Animated.parallel([Animated.timing(this.state.logoImageScale, {
			duration: 1000,
			easing: Easing.bezier(0.22, 0.61, 0.36, 1),
			toValue: 1,
		}), Animated.timing(this.state.logoImageOpacity, {
			duration: 1000,
			easing: Easing.bezier(0.22, 0.61, 0.36, 1),
			toValue: 1,
		})])]).start()
	}

	render() {

		return <LinearGradient
				start={{
					x: 0.31,
					y: 1.1,
				}}
				end={{
					x: 0.69,
					y: -0.1,
				}}
				locations={[0, 1]}
				colors={["rgb(247, 132, 98)", "rgb(139, 27, 140)"]}
				style={styles.welcomeViewLinearGradient}>
				<View
					style={styles.welcomeView}>
					<Animated.View
						style={[{
							opacity: this.state.logoImageOpacity.interpolate({
								inputRange: [-1, 0, 0.6, 1],
								outputRange: [1, 0, 1, 1],
							}),
							transform: [{
								scale: this.state.logoImageScale.interpolate({
									inputRange: [-1, 0, 0.2, 0.4, 0.6, 0.8, 1],
									outputRange: [1, 0.3, 1.1, 0.9, 1.03, 0.97, 1],
								}),
							}],
						}, styles.logoImageAnimated]}>
						<Image
							source={require("../assets/images/logo.png")}
							style={styles.logoImage}/>
					</Animated.View>
					<Text
						style={styles.spacebookText}>Spacebook</Text>
					<Text
						style={styles.conquerTheStarsText}>Conquer the stars{"\n"}from behind the screen.</Text>
					<View
						style={{
							flex: 1,
						}}/>
					<View
						pointerEvents="box-none"
						style={{
							alignSelf: "stretch",
							height: 60,
							marginLeft: 30,
							marginRight: 30,
							marginBottom: 85,
							flexDirection: "row",
							alignItems: "flex-end",
						}}>
						<TouchableOpacity
							onPress={this.onSignUpPressed}
							style={styles.signUpButton}>
							<Image
								source={require("../assets/images/icon-sign-up.png")}
								style={styles.signUpButtonImage}/>
							<Text
								style={styles.signUpButtonText}>SIGN UP</Text>
						</TouchableOpacity>
						<View
							style={{
								flex: 1,
							}}/>
						<TouchableOpacity
							onPress={this.onLogInPressed}
							style={styles.logInButton}>
							<Image
								source={require("../assets/images/icon-login-lock.png")}
								style={styles.logInButtonImage}/>
							<Text
								style={styles.logInButtonText}>LOG IN</Text>
						</TouchableOpacity>
					</View>
					<Text
						style={styles.supernovaStuText}>© 2050 Supernova Studio</Text>
				</View>
			</LinearGradient>
	}
}

const styles = StyleSheet.create({
	welcomeViewLinearGradient: {
		flex: 1,
	},
	welcomeView: {
		width: "100%",
		height: "100%",
		alignItems: "center",
	},
	logoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		shadowColor: "rgba(0, 0, 0, 00.20)",
		shadowRadius: 50,
		shadowOpacity: 1,
		width: "100%",
		height: "100%",
	},
	logoImageAnimated: {
		width: 120,
		height: 120,
		marginTop: 100,
	},
	spacebookText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: "Lato-Bold",
		fontSize: 42,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "center",
		marginTop: 60,
	},
	conquerTheStarsText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: "Lato-Regular",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		marginTop: 20,
	},
	signUpButtonText: {
		color: "rgb(217, 103, 110)",
		fontFamily: "Lato-Bold",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "center",
	},
	signUpButton: {
		backgroundColor: "white",
		borderRadius: 2,
		shadowColor: "rgba(0, 0, 0, 00.20)",
		shadowRadius: 50,
		shadowOpacity: 1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 148,
		height: 60,
	},
	signUpButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
	logInButton: {
		backgroundColor: "white",
		borderRadius: 2,
		shadowColor: "rgba(0, 0, 0, 00.20)",
		shadowRadius: 50,
		shadowOpacity: 1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 148,
		height: 60,
	},
	logInButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
	logInButtonText: {
		color: "rgb(218, 104, 109)",
		fontFamily: "Lato-Bold",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "center",
	},
	supernovaStuText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: "Lato-Regular",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		marginBottom: 20,
	},
})
