import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	ImageBackground,
	Image,
	Dimensions
} from 'react-native';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const { width, height } = Dimensions.get('window');

class Home extends Component {
	constructor(props) {
		super(props);

		this.onLogoutPress = this.onLogoutPress.bind(this);
	}

	onLogoutPress() {
		this.props.logoutUser();
	}

	render() {
		return (
			<ImageBackground
				source={require('../../assets/images/home_background.jpg')}
				style={styles.backgroundImage}
				resizeMode="stretch"
			>
				<TouchableOpacity
					onPress={this.onLogoutPress}
					style={styles.logoutStyle}
				>
					<SimpleLineIcons
						name='logout'
						size={20}
						style={{ color: '#FF0000', textAlign: 'center' }}
					/>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.fotoContainer}
				>
					<Image
						source={require('../../assets/images/profile.jpg')}
						style={styles.fotoStyle}
					/>
				</TouchableOpacity>
				<View style={styles.dataContainer}>
					<Text style={styles.boldText}>Dwi Wahyu Wijaya</Text>
					<View style={styles.contentData}>
						<View>
							<View style={styles.groupData}>
								<Text style={styles.text}>Simpanan Wajib :</Text>
								<View style={styles.currencyView}>
									<Text style={styles.text}>Rp. </Text>
									<Text style={styles.boldText}>600,000</Text>
								</View>
							</View>
							<View style={styles.groupData}>
								<Text style={styles.text}>Simpanan Pokok :</Text>
								<View style={styles.currencyView}>
									<Text style={styles.text}>Rp. </Text>
									<Text style={styles.boldText}>500,000</Text>
								</View>
							</View>
							<View style={styles.groupData}>
								<Text style={styles.text}>Simpanan Sukarela :</Text>
								<View style={styles.currencyView}>
									<Text style={styles.text}>Rp. </Text>
									<Text style={styles.boldText}>6,000,000</Text>
								</View>
							</View>
						</View>
						<View>
							<View style={styles.groupData}>
								<Text style={styles.text}>Saldo Pinjaman :</Text>
								<View style={styles.currencyView}>
									<Text style={styles.text}>Rp. </Text>
									<Text style={styles.boldText}>-</Text>
								</View>
							</View>
							<View style={styles.groupData}>
								<Text style={styles.text}>SHU :</Text>
								<View style={styles.currencyView}>
									<Text style={styles.text}>Rp. </Text>
									<Text style={styles.boldText}>-</Text>
								</View>
							</View>
						</View>
					</View>
				</View>
			</ImageBackground>
		)
	}
}

const styles = StyleSheet.create({
	backgroundImage: {
		width: '100%',
		height: '100%',
		justifyContent: 'flex-end'
	},
	logoutStyle: {
		position: 'absolute',
		left: 20,
		top: 40
	},
	fotoContainer: {
		position: 'absolute',
		right: 20,
		top: 40
	},
	fotoStyle: {
		width: width / 4,
		height: width / 4,
		borderRadius: width / 8
	},
	text: {
		color: '#ddd',
		lineHeight: 20
	},
	boldText: {
		color: '#fff',
		textAlign: 'center',
		fontWeight: 'bold',
		lineHeight: 20,
		fontSize: 20
	},
	dataContainer: {
		width,
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
		paddingTop: 20,
		paddingBottom: 30,
		paddingHorizontal: 10
	},
	contentData: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 5
	},
	groupData: {
		marginTop: 15
	},
	currencyView: {
		flexDirection: 'row',
		marginTop: 5
	}
});

export default connect(null, { logoutUser })(Home);
