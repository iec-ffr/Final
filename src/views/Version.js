import React, { useState, useEffect, Suspense,lazy } from 'react';
import {Versions} from '../api/Versions'
import Resum from '../components/Resum/Resum';

import { Load } from '../components/Load/Load';
const VersionItem = lazy(() => import('../components/VersionItem/VersionItem'));

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
            
            <Suspense fallback={<Load />}>
                <VersionItem key={ver.id} verId={ver.id} verModel={ver.model} verName={ver.name} verPrice={ver.price}/>
                </Suspense>
            )}
            </div>
        }

        <Resum/>
        </>
        )
}

export default Version
