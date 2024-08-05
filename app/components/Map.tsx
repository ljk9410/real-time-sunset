'use client';

import { GoogleMap, InfoWindow, useLoadScript } from '@react-google-maps/api';

const mapContainerStyle = {
	width: '100vw',
	height: '100vh',
};

const center = {
	lat: 37.7749,
	lng: -122.4194,
};

const Map = () => {
	const { isLoaded, loadError } = useLoadScript({
		googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY || '',
	});

	const onMapClick = () => {
		console.log('123');
	};

	if (loadError) return <div>Error loading maps</div>;
	if (!isLoaded) return <div>Loading Maps...</div>;

	return (
		<GoogleMap
			mapContainerStyle={mapContainerStyle}
			zoom={8}
			center={center}
			onClick={onMapClick}
		>
			{/* <InfoWindow
				position={{ lat: center.lat, lng: center.lng }}
				onCloseClick={() => console.log('infoWindow')}
			>
				<div>안녕하세요</div>
			</InfoWindow> */}
		</GoogleMap>
	);
};

export default Map;
