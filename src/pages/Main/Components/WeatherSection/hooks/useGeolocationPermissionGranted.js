import { useState, useEffect } from 'react';

const useGeolocationPermission = () => {
  const [geolocationPermission, setGeolocationPermission] = useState(false);

  useEffect(() => {
    let geolocationPermission;
    let updatePermissionState;

    const getGeolocationPermission = async () => {
      geolocationPermission = await navigator.permissions.query({ name: 'geolocation' });
      setGeolocationPermission(geolocationPermission.state); // 'granted', 'prompt', 'denied'

      updatePermissionState = () => {
        setGeolocationPermission(geolocationPermission.state);
      };
      geolocationPermission.addEventListener('change', updatePermissionState);
    };

    getGeolocationPermission();
    
    return async () => {
      const geolocationPermission = await navigator.permissions.query({ name: 'geolocation' });
      geolocationPermission.removeEventListener('change', updatePermissionState);
    };
  }, [geolocationPermission]);

  return geolocationPermission;
};

export default useGeolocationPermission;
