import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	TouchableOpacity,
	KeyboardAvoidingView,
	Platform
} from 'react-native';
import Video from 'react-native-video';
import { connect } from 'react-redux';
import EntIcon from 'react-native-vector-icons/Entypo';

import { usernameChanged, passwordChanged, loginUser, existingLoginUser } from '../../actions';
import { Spinner } from '../common';

class LoginForm extends Component {
	constructor(props) {
		super(props);

		this.onUsernameChange = this.onUsernameChange.bind(this);
		this.onPasswordChange = this.onPasswordChange.bind(this);
		this.onButtonPress = this.onButtonPress.bind(this);
	}

	componentWillMount() {
		this.props.existingLoginUser();
	}

	onUsernameChange(text) {
		this.props.usernameChanged(text);
	}

	onPasswordChange(text) {
		this.props.passwordChanged(text);
	}

	onButtonPress() {
		const { username, password } = this.props;
		this.props.loginUser({ username, password });
	}

	renderButton() {	
		if (this.props.loading) {
			return <Spinner size="large" />;
		}
		return (
			<TouchableOpacity
				onPress={this.onButtonPress}
				style={styles.button}
			>
				<Text style={styles.buttonText}>LOGIN</Text>
			</TouchableOpacity>
		);
	}

	renderErrorText() {
		if (this.props.error !== '') {
			return (
				<View style={styles.errorContainer}>
					<Text style={styles.errorTextStyle}>
						<EntIcon
							name='circle-with-cross'
							size={16}
							style={{ color: '#D8000C' }}
						/>
						{'  '}
						{this.props.error}
					</Text>
				</View>
			);
		}
		return;
	}

	renderInput() {
		return (
			<View>
				<TextInput
					placeholder="Username"
					placeholderTextColor="rgba(255,255,255,0.6)"
					returnKeyType="next"
					onSubmitEditing={() => this.passwordInput.focus()}
					keyboardType="email-address"
					style={styles.input}
					autoCapitalize="none"
					autoCorrect={false}
					underlineColorAndroid="transparent"
					onChangeText={this.onUsernameChange}
					value={this.props.username}
				/>
				<TextInput
					placeholder="Password"
					placeholderTextColor="rgba(255,255,255,0.6)"
					returnKeyType="go"
					secureTextEntry
					style={styles.input}
					underlineColorAndroid="transparent"
					ref={(input) => this.passwordInput = input}
					onChangeText={this.onPasswordChange}
					value={this.props.password}
				/>
				{this.renderErrorText()}
				{this.renderButton()}
			</View>
		);
	}

	renderKeyboardVoid() {
		// iOS need to set behavior, while android does not
		if (Platform.OS === 'android') {
			return (
				<KeyboardAvoidingView style={styles.keyboardContainer}>
					{this.renderInput()}
				</KeyboardAvoidingView>
			);
		}
		return (
			<KeyboardAvoidingView
				style={styles.keyboardContainer}
				behavior="padding"
			>
				{this.renderInput()}
			</KeyboardAvoidingView>
		);
	}

	render() {
		return (
			<View style={styles.topContainer}>
				<Video
					source={require('../../assets/videos/video_background.mp4')}
					style={styles.backgroundVideo}
					resizeMode="stretch"
					repeat
					muted
				/>
				{this.renderKeyboardVoid()}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	topContainer: {
		flex: 1
	},
	backgroundVideo: {
		position: 'absolute',
		top: 0,
		left: 0,
		bottom: 0,
		right: 0
	},
	input: {
		height: 50,
		marginBottom: 10,
		backgroundColor: 'rgba(0,0,0,0.5)',
		paddingHorizontal: 10,
		color: '#fff',
		borderRadius: 10,
		fontSize: 16,
		borderWidth: 3,
		borderColor: '#fff',
		textAlign: 'center'
	},
	button: {
		height: 40,
		justifyContent: 'center',
		backgroundColor: 'rgba(176,21,19,0.8)',
		borderRadius: 20
	},
	keyboardContainer: {
		padding: 20,
		position: 'absolute',
		left: 30,
		right: 30,
		bottom: 30
	},
	buttonText: {
		textAlign: 'center',
		color: '#fff',
		fontWeight: '700'
	},
	errorContainer: {
		height: 40,
		justifyContent: 'center',
		backgroundColor: 'rgba(255,255,255,0.7)',
		marginBottom: 10,
		borderRadius: 10
	},
	errorTextStyle: {
		fontSize: 16,
		fontWeight: '700',
		textAlign: 'justify',
		color: '#D8000C',
		paddingHorizontal: 20
	}
});

const mapStateToProps = ({ auth }) => {
	const { username, password, error, loading } = auth;

	return { username, password, error, loading };
};

export default connect(mapStateToProps, {
	usernameChanged, passwordChanged, loginUser, existingLoginUser
})(LoginForm);
