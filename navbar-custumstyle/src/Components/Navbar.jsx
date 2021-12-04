import styled from "styled-components";
const ToolBar = styled.div`
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  background-color: blue;
`;
const SiteName = styled.div`
  width: 300px;
  text-align: left;
`;
const DrawerItem = styled.p`
  color: white;
  padding: 10px;
`;
const Navbar = () => {
  return (
    <div>
      <ToolBar>
        <SiteName>
          <DrawerItem>Site Name</DrawerItem>
        </SiteName>
        <DrawerItem>Prices</DrawerItem>
        <DrawerItem>Start Page</DrawerItem>
        <DrawerItem>Offer</DrawerItem>
        <DrawerItem>Contact</DrawerItem>
      </ToolBar>
    </div>
  );
};
export default Navbar;
