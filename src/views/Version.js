import React, { useState, useEffect } from 'react';
import {Versions} from '../api/Versions'
import VersionItem from '../components/VersionItem/VersionItem'
import Resum from '../components/Resum/Resum';

const Version = () =>{

    const [version, setVersion] = useState([]);

    function startUp(){
        
        let v = Versions.getVersions();
        
        v.then(
            function(data){
                setVersion(data.items);
            }
        )
    }
    useEffect(() => startUp(),[])

    return (
        <>
        {
            <div className="row">
            {version.map(ver=>
            
                <VersionItem key={ver.id} verId={ver.id} verModel={ver.model} verName={ver.name} verPrice={ver.price}/>
            )}
            </div>
        }

        <Resum/>
        </>
        )
}

export default Version
