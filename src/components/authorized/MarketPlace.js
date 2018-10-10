import React, { Component } from 'react';
import {
	ScrollView,
	View,
	TouchableOpacity,
	Text,
	StyleSheet,
	Dimensions,
	Platform,
	Image
} from 'react-native';

const { width, height } = Dimensions.get('window');

class MarketPlace extends Component {
	render() {
		return (
			<ScrollView style={styles.topContainer}>
				<View style={styles.produkContainer}>
					<TouchableOpacity style={styles.produk}>
						<Image
							source={require('../../assets/images/baju_muslimah.jpg')}
							style={styles.fotoProduk}
							resizeMode="stretch"
						/>
						<Text style={styles.titleText}>Pakaian Muslimah</Text>
						<Text style={styles.descText}>Desain Baju Muslimah Model Gamis Syari Modern Terbaru</Text>
						<Text style={styles.priceText}>Rp. 200,000</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.produk}>
						<Image
							source={require('../../assets/images/mainan_edukasi.jpg')}
							style={styles.fotoProduk}
							resizeMode="stretch"
						/>
						<Text style={styles.titleText}>Mainan Edukasi</Text>
						<Text style={styles.descText}>Map of The World with flags</Text>
						<Text style={styles.priceText}>Rp. 199,000</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.produkContainer}>
					<TouchableOpacity style={styles.produk}>
						<Image
							source={require('../../assets/images/kaos_kaki.jpeg')}
							style={styles.fotoProduk}
							resizeMode="stretch"
						/>
						<Text style={styles.titleText}>Kaos Kaki</Text>
						<Text style={styles.descText}>Kaos kaki Trendy untuk Olah Raga</Text>
						<Text style={styles.priceText}>Rp. 50,000</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.produk}>
						<Image
							source={require('../../assets/images/topi.jpeg')}
							style={styles.fotoProduk}
							resizeMode="stretch"
						/>
						<Text style={styles.titleText}>Topi</Text>
						<Text style={styles.descText}>Topi Golf</Text>
						<Text style={styles.priceText}>Rp. 70,000</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.produkContainer}>
					<TouchableOpacity style={styles.produk}>
						<Image
							source={require('../../assets/images/sarung_galon.jpeg')}
							style={styles.fotoProduk}
							resizeMode="stretch"
						/>
						<Text style={styles.titleText}>Cover Galon Quotes</Text>
						<Text style={styles.descText}>Cover Galon dengan Quotes yang menarik dan memotivasi</Text>
						<Text style={styles.priceText}>Rp. 70,000</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.produk}>
						<Image
							source={require('../../assets/images/power_bank.jpeg')}
							style={styles.fotoProduk}
							resizeMode="stretch"
						/>
						<Text style={styles.titleText}>USB Power Bank Philips Murah</Text>
						<Text style={styles.descText}>11,000mAh big power capacity with LED torch. Ideal for travelling or camping</Text>
						<Text style={styles.priceText}>Rp. 200,000</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		)
	}
}

const styles = StyleSheet.create({
	topContainer: {
		flex: 1,
		marginTop: (Platform.OS === 'ios' ? 20 : 0),
		marginBottom: 10
	},
	produkContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: 10,
		marginTop: 10
	},
	produk: {
		width: (width / 2) - 15,
		borderWidth: 2,
		borderColor: '#ddd',
		paddingBottom: 10
	},
	fotoProduk: {
		width: '100%',
		height: 150
	},
	titleText: {
		color: '#000',
		fontWeight: 'bold',
		fontSize: 18,
		marginTop: 10,
		paddingHorizontal: 5
	},
	descText: {
		color: '#000',
		marginTop: 5,
		paddingHorizontal: 5,
		fontSize: 14
	},
	priceText: {
		color: '#000',
		marginTop: 5,
		paddingHorizontal: 5,
		fontWeight: 'bold'
	}
});

export default MarketPlace;
