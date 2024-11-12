// import { useState, useEffect } from "react";
// const [isMobile, setIsMobile] = useState(false);


// useEffect(() => {
//     const handleResize = () => {
//         const isMobileDevice = window.matchMedia("(max-width: 768px)").matches;
//         setIsMobile(isMobileDevice);
//     };
//     window.addEventListener("resize", handleResize);
//     handleResize(); // Initialize the value on the first render
//     return () => {
//         window.removeEventListener("resize", handleResize);
//     };
// }, []);

// {/* {
//           isMobile ?
//             <ActionMenu row={row} actions={actions} />
//             :
//             <StyledSpeedDial
//               ariaLabel="SpeedDial playground example"
//               icon={<SpeedDialIcon />}
//               direction="right"
//             >
//               {actions.map((action) => (
//                 <SpeedDialAction
//                   key={action.name}
//                   icon={action.icon}
//                   tooltipTitle={action.name}
//                   onClick={action.action}
//                 />
//               ))}
//             </StyledSpeedDial>
//         } */}

// const StyledSpeedDial = styled(SpeedDial)`
//   .MuiSpeedDial-fab {
//     background-color: #240439;
//     &:hover {
//       background-color: #440080;
//     }
//   }
// `;



import React, { useState, useEffect } from "react";
import styled from "@emotion/styled"; 
import { SpeedDial, SpeedDialIcon, SpeedDialAction } from "@mui/material"; 
import ActionMenu from "./ActionMenu";  

const MyComponent = ({ row, actions }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isMobileDevice = window.matchMedia("(max-width: 768px)").matches;
      setIsMobile(isMobileDevice);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); 

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      {isMobile ? (
        <ActionMenu row={row} actions={actions} />
      ) : (
        <StyledSpeedDial
          ariaLabel="SpeedDial playground example"
          icon={<SpeedDialIcon />}
          direction="right"
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={action.action}
            />
          ))}
        </StyledSpeedDial>
      )}
    </div>
  );
};

// Styling for SpeedDial
const StyledSpeedDial = styled(SpeedDial)`
  .MuiSpeedDial-fab {
    background-color: #240439;
    &:hover {
      background-color: #440080;
    }
  }
`;

export default MyComponent;
