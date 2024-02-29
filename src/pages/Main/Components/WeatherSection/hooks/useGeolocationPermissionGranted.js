import { useState, useEffect } from 'react';

const useGeolocationPermission = () => {
  const [geolocationPermission, setGeolocationPermission] = useState(false);

  useEffect(() => {
    let geolocationPermission;
    let updatePermissionState;

    const getGeolocationPermission = async () => {
      // 위치정보 권한 현재 상태를 저장
      geolocationPermission = await navigator.permissions.query({ name: 'geolocation' });
      console.log(1, geolocationPermission);
      setGeolocationPermission(geolocationPermission.state); // 'granted', 'prompt', 'denied'

      // 위치정보 권한이 바뀔 때 state를 업데이트 하도록 이벤트리스너 등록
      updatePermissionState = () => {
        setGeolocationPermission(geolocationPermission.state);
      };
      geolocationPermission.addEventListener('change', updatePermissionState);
    };

    getGeolocationPermission();
    
    return async () => {
      // 언마운트 시 위치정보 권한에 대한 이벤트리스너 삭제
      const geolocationPermission = await navigator.permissions.query({ name: 'geolocation' });
      geolocationPermission.removeEventListener('change', updatePermissionState);
    };
  }, [geolocationPermission]);

  return geolocationPermission;
};

export default useGeolocationPermission;
