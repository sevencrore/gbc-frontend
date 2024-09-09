import React, { useState, useEffect } from "react";
import classNames from "classnames";

import slideUp from "../../../utilities/slideUp";
import slideDown from "../../../utilities/slideDown";
import getParents from "../../../utilities/getParents";
import { useTranslation } from "react-i18next";

import { useLayout } from "../LayoutProvider";

import { NavLink, Link } from "react-router-dom";
import { createPopper } from "@popperjs/core";

import { Icon, Media, MediaText, MediaGroup, Image } from "../../../components";

import { headerModulesData } from "../../../store/module/HeaderModuleData";
import api from "../../../../src/services/auth/api";

import {
  modulesData,
  crmModulesData,
  accountsModulesData,
} from "../../../store/module/ModuleData.js";
import axios from "axios";

function MenuItemTemplate({ text, icon }) {
  return (
    <>
      {icon && (
        <span className="nk-nav-icon">
          <Icon name={icon}></Icon>
        </span>
      )}
      {text && (
        <span className="nk-nav-text" style={{ fontWeight: "bold" }}>
          {text}
        </span>
      )}
    </>
  );
}

function MenuItemLink({
  text,
  icon,
  sub,
  to,
  blank,
  onClick,
  onMouseEnter,
  className,
  ...props
}) {
  const compClass = classNames({
    "nk-nav-link": true,
    "nk-nav-toggle": sub,
    [className]: className,
  });
  return (
    <>
      {!blank && !sub && (
        <NavLink className={compClass} to={to}>
          <MenuItemTemplate icon={icon} text={text} />
          {props.children}
        </NavLink>
      )}
      {blank && (
        <Link className={compClass} to={to} target="_blank">
          <MenuItemTemplate icon={icon} text={text} />
          {props.children}
        </Link>
      )}
      {sub && (
        <a
          className={compClass}
          onClick={onClick}
          onMouseEnter={onMouseEnter}
          href="#expand"
        >
          <MenuItemTemplate icon={icon} text={text} />
          {props.children}
        </a>
      )}
    </>
  );
}

function MenuItem({ sub, className, ...props }) {
  const compClass = classNames({
    "nk-nav-item": true,
    "has-sub": sub,
    [className]: className,
  });
  return <li className={compClass}>{props.children}</li>;
}

function MenuSub({ mega, size, megaSize, className, megaClassName, ...props }) {
  const compClass = classNames({
    "nk-nav-sub": true,
    [`nk-nav-sub-${size}`]: size,
    [className]: className,
  });
  const megaClass = classNames({
    "nk-nav-mega": true,
    [`nk-nav-mega-${megaSize}`]: megaSize,
    [megaClassName]: megaClassName,
  });
  return (
    <>
      {!mega && <ul className={compClass}>{props.children}</ul>}
      {mega && (
        <div className={compClass}>
          <div className={megaClass}>{props.children}</div>
        </div>
      )}
    </>
  );
}

function MenuList({ className, ...props }) {
  const compClass = classNames({
    "nk-nav": true,
    [className]: className,
  });
  return <ul className={compClass}>{props.children}</ul>;
}
const baseURL = process.env.REACT_APP_API_BASE_URL_MASTER_DATA;
const _header = {
  "Content-Type": "application/json",
  accept: "*/*",
  Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
};

function Menu() {
  const layout = useLayout();

  // set ModuleData to state
  const [moduleRows, setModuleRows] = useState([]);
  const [headerModuleRows, setHeaderModuleRows] = useState(headerModulesData);
  const [subMenu, setSubMenu] = useState({});

  const [data, setData] = useState([]);
  const [roleId, setRoleId] = useState(localStorage.getItem("roleId"));

  const getRoleMenuList = (_id) => {
    api
      .post(
        baseURL + `rp-role-association/get-by-role-id`,
        // { roleId: localStorage.getItem("roleId") },
        { roleId: _id }
      )
      .then((response) => {
        // saveSuccess();
        // alert("saved");
        const res = response.data.content.rpRoleAssociation;
        console.log("res", res);
        // const man =res.map((item)=>(
        //   item.value
        // ))
        if (res && res.length > 0) {
          const mapCodes = res.map((item) => item.mapCode).filter(Boolean);
          setData(mapCodes);
        } else {
          setData([]);
        }

        // console.log(man);
        // setData()
        // setData({
        //   roleId: "",
        //   rpRolePermissionId: 4,
        //   values: [],
        // });
        // setSelectedIds([]);
      })
      .catch((err) => {});
  };

  useEffect(() => {
    getRoleMenuList(roleId);
  }, [roleId]);

  console.log(data);

  const [showMenu, setShowMenu] = useState({
    Test: true,
    Test1: true,
    Test2: true,

    job: true,
    category: true,
    role: true,
    position: true,

    Admin: false,

    Admin_Master: false,

    Admin_Master_Registration: false,
    Admin_Master_Registration_Caste: false,
    Admin_Master_Registration_Roles: false,
    Admin_Master_Registration_Education: false,
    Admin_Master_Registration_Relationship: false,
    Admin_Master_Registration_State: false,
    Admin_Master_Registration_District: false,
    Admin_Master_Registration_Taluk: false,
    Admin_Master_Registration_Hobli: false,
    Admin_Master_Registration_Village: false,
    Admin_Master_Registration_Trader_Type: false,
    Admin_Master_Registration_Farmer_Type: false,
    Admin_Master_Registration_Working_Institution: false,
    Admin_Master_Registration_User: false,
    Admin_Master_Registration_Designation: false,
    Admin_Master_Registration_No_Fruits_Farmer_Counter: false,

    Admin_Master_Land: false,

    Admin_Master_Land_Holding_Category: false,
    Admin_Master_Land_Irrigation_Source: false,
    Admin_Master_Land_Irrigation_Type: false,
    Admin_Master_Land_Ownership: false,
    Admin_Master_Land_Soil_Type: false,
    Admin_Master_Land_Rear_House_Roof_Type: false,
    Admin_Master_Land_Silk_Worm_Variety: false,
    Admin_Master_Land_Source_of_Mulberry: false,
    Admin_Master_Land_Mulberry_Variety: false,
    Admin_Master_Land_Subsidy_Details: false,
    Admin_Master_Land_Plantation_Type: false,
    Admin_Master_Land_Machine_Type: false,

    Admin_Master_Service: false,
    Admin_Master_Service_Program: false,
    Admin_Master_Service_Component: false,
    Admin_Master_Service_Head_of_Account: false,
    Admin_Master_Service_Reason_for_Lot_Cancellation: false,
    Admin_Master_Service_Reason_for_Bid_Rejection: false,

    Admin_Master_Training: false,
    Admin_Master_Training_Program: false,
    Admin_Master_Training_Course: false,
    Admin_Master_Training_Deputed_Institute: false,
    Admin_Master_Training_Group: false,
    Admin_Master_Training_Institution: false,
    Admin_Master_Training_Mode: false,
    Admin_Master_Training_Office: false,

    Admin_Master_HelpDesk: false,
    Admin_Master_HelpDesk_Module: false,
    Admin_Master_HelpDesk_Feature: false,
    Admin_Master_HelpDesk_Board_Category: false,
    Admin_Master_HelpDesk_Category: false,
    Admin_Master_HelpDesk_Sub_Category: false,
    Admin_Master_HelpDesk_Status: false,
    Admin_Master_HelpDesk_Severity: false,
    Admin_Master_HelpDesk_Faq: false,

    Admin_Master_Garden: false,
    Admin_Master_Garden_Line: false,
    Admin_Master_Garden_Grainage: false,
    Admin_Master_Garden_Disinfectant: false,
    Admin_Master_Garden_Generation_Number: false,
    Admin_Master_Garden_Farm: false,

    Admin_Master_Auction: false,
    Admin_Master_Auction_Bin: false,
    Admin_Master_Auction_Market: false,
    Admin_Master_Auction_Godown: false,
    Admin_Master_Auction_Activate_Reeler: false,
    Admin_Master_Auction_Crate: false,
    Admin_Master_Auction_Race: false,
    Admin_Master_Auction_Source: false,
    Admin_Master_Auction_Flex_Time: false,
    Admin_Master_Auction_Exception_Time: false,
    Admin_Master_Auction_Market_Type: false,
    Admin_Master_Auction_Reeler_Type: false,
    Admin_Master_Auction_External_Unit: false,
    Admin_Master_Auction_Empaneled_Vendor: false,
    Admin_Master_Auction_Reeler_Device_Mapping: false,
    Admin_Master_Auction_Race_Mapping: false,

    Admin_Master_General: false,
    Admin_Master_General_Pages: false,
    Admin_Master_General_Config_Role: false,

    Admin_Report: false,
    Admin_Report_Admin: false,
    Admin_Report_Transaction: false,
    Admin_Report_Dashboard: false,
    Admin_Report_DTR: false,
    Admin_Report_Unit: false,
    Admin_Report_Pending: false,
    Admin_Report_Bidding_Report: false,
    Admin_Report_Bidding_Reeler_Report: false,
    Admin_Report_Farmer_Transaction_Report: false,
    Admin_Report_Reeler_Transaction_Report: false,
  });

  // Old show menu using mapcode

  // useEffect(() => {
  //   const updatedShowMenu = { ...showMenu };
  //   // console.log(data);
  //   data.forEach((key) => {
  //     // console.log(key);
  //     if (updatedShowMenu.hasOwnProperty(key)) {
  //       updatedShowMenu[key] = true;
  //     }
  //   });
  //   setShowMenu(updatedShowMenu);
  // }, [data]);

  useEffect(() => {
    const updatedShowMenu = { ...showMenu };
    if (data.includes("Registration")) {
      // Iterate over keys and set Registration properties to true
      Object.keys(updatedShowMenu).forEach((key) => {
        if (key.startsWith("Registration_")) {
          updatedShowMenu[key] = true;
        }
      });
    }
    if (data.includes("Services")) {
      Object.keys(updatedShowMenu).forEach((key) => {
        if (key.startsWith("Services_")) {
          updatedShowMenu[key] = true;
        }
      });
    }
    if (data.includes("DBT")) {
      Object.keys(updatedShowMenu).forEach((key) => {
        if (key.startsWith("DBT_")) {
          updatedShowMenu[key] = true;
        }
      });
    }
    if (data.includes("Market")) {
      Object.keys(updatedShowMenu).forEach((key) => {
        if (key.startsWith("Market_")) {
          updatedShowMenu[key] = true;
        }
      });
    }
    if (data.includes("SeedDFL")) {
      Object.keys(updatedShowMenu).forEach((key) => {
        if (key.startsWith("SeedDFL_")) {
          updatedShowMenu[key] = true;
        }
      });
    }
    if (data.includes("GardenManagement")) {
      Object.keys(updatedShowMenu).forEach((key) => {
        if (key.startsWith("GardenManagement_")) {
          updatedShowMenu[key] = true;
        }
      });
    }
    if (data.includes("ChawkiManagement")) {
      Object.keys(updatedShowMenu).forEach((key) => {
        if (key.startsWith("ChawkiManagement_")) {
          updatedShowMenu[key] = true;
        }
      });
    }
    if (data.includes("TargetSetting")) {
      Object.keys(updatedShowMenu).forEach((key) => {
        if (key.startsWith("TargetSetting_")) {
          updatedShowMenu[key] = true;
        }
      });
    }
    if (data.includes("Inspection")) {
      Object.keys(updatedShowMenu).forEach((key) => {
        if (key.startsWith("Inspection_")) {
          updatedShowMenu[key] = true;
        }
      });
    }
    if (data.includes("Training")) {
      Object.keys(updatedShowMenu).forEach((key) => {
        if (key.startsWith("Training_")) {
          updatedShowMenu[key] = true;
        }
      });
    }
    if (data.includes("Helpdesk")) {
      Object.keys(updatedShowMenu).forEach((key) => {
        if (key.startsWith("Helpdesk_")) {
          updatedShowMenu[key] = true;
        }
      });
    }
    if (data.includes("Admin")) {
      Object.keys(updatedShowMenu).forEach((key) => {
        if (key.startsWith("Admin_")) {
          updatedShowMenu[key] = true;
        }
      });
    }
    if (data.includes("Admin_Report")) {
      Object.keys(updatedShowMenu).forEach((key) => {
        if (key.startsWith("Admin_Report_")) {
          updatedShowMenu[key] = true;
        }
      });
    }
    //  else {
    data.forEach((key) => {
      // console.log(key);
      if (updatedShowMenu.hasOwnProperty(key)) {
        updatedShowMenu[key] = true;
      }
    });
    // }

    setShowMenu(updatedShowMenu);
  }, [data]);

  useEffect(() => {
    const hasRegistration = data.some((item) =>
      item.startsWith("Registration_")
    );
    if (hasRegistration) {
      setShowMenu((prevMenu) => ({
        ...prevMenu,
        Registration: true,
      }));
    }

    const hasAdmin = data.some((item) => item.startsWith("Admin_"));
    if (hasAdmin) {
      setShowMenu((prevMenu) => ({
        ...prevMenu,
        Admin: true,
      }));
    }

    const hasAdminMaster = data.some((item) =>
      item.startsWith("Admin_Master_")
    );
    if (hasAdminMaster) {
      setShowMenu((prevMenu) => ({
        ...prevMenu,
        Admin: true,
        Admin_Master: true,
      }));
    }

    const hasAdminMasterRegistration = data.some((item) =>
      item.startsWith("Admin_Master_Registration_")
    );
    if (hasAdminMasterRegistration) {
      setShowMenu((prevMenu) => ({
        ...prevMenu,
        Admin: true,
        Admin_Master: true,
        Admin_Master_Registration: true,
      }));
    }

    const hasAdminMasterLand = data.some((item) =>
      item.startsWith("Admin_Master_Land_")
    );
    if (hasAdminMasterLand) {
      setShowMenu((prevMenu) => ({
        ...prevMenu,
        Admin: true,
        Admin_Master: true,
        Admin_Master_Land: true,
      }));
    }

    const hasAdminMasterService = data.some((item) =>
      item.startsWith("Admin_Master_Service_")
    );
    if (hasAdminMasterService) {
      setShowMenu((prevMenu) => ({
        ...prevMenu,
        Admin: true,
        Admin_Master: true,
        Admin_Master_Service: true,
      }));
    }

    const hasAdminMasterAuction = data.some((item) =>
      item.startsWith("Admin_Master_Auction_")
    );
    if (hasAdminMasterAuction) {
      setShowMenu((prevMenu) => ({
        ...prevMenu,
        Admin: true,
        Admin_Master: true,
        Admin_Master_Auction: true,
      }));
    }

    const hasAdminReport = data.some((item) =>
      item.startsWith("Admin_Report_")
    );
    if (hasAdminReport) {
      setShowMenu((prevMenu) => ({
        ...prevMenu,
        Admin: true,
        Admin_Master: true,
        Admin_Master_Report: true,
      }));
    }
  }, [data]);

  // variables for Sidebar
  let menu = {
    classes: {
      main: "nk-nav",
      item: "nk-nav-item",
      link: "nk-nav-link",
      toggle: "nk-nav-toggle",
      sub: "nk-nav-sub",
      subparent: "has-sub",
      active: "active",
      current: "current-page",
    },
  };

  let currentLink = function (selector) {
    let elm = document.querySelectorAll(selector);
    elm.forEach(function (item) {
      var activeRouterLink = item.classList.contains("active");
      if (activeRouterLink) {
        let parents = getParents(
          item,
          `.${menu.classes.main}`,
          menu.classes.item
        );
        parents.forEach((parentElemets) => {
          parentElemets.classList.add(
            menu.classes.active,
            menu.classes.current
          );
          let subItem = parentElemets.querySelector(`.${menu.classes.sub}`);
          subItem !== null && (subItem.style.display = "block");
        });
      } else {
        item.parentElement.classList.remove(
          menu.classes.active,
          menu.classes.current
        );
      }
    });
  };

  // dropdown toggle
  let dropdownToggle = function (elm) {
    let parent = elm.parentElement;
    let nextelm = elm.nextElementSibling;
    let speed =
      nextelm.children.length > 5 ? 400 + nextelm.children.length * 10 : 400;
    if (!parent.classList.contains(menu.classes.active)) {
      parent.classList.add(menu.classes.active);
      slideDown(nextelm, speed);
    } else {
      parent.classList.remove(menu.classes.active);
      slideUp(nextelm, speed);
    }
  };

  // dropdown extended
  let dropdownExtended = function (elm) {
    let nextelm = elm.nextElementSibling;
    let headerCollapse = layout.headerCollapse
      ? layout.headerCollapse
      : layout.breaks.lg;
    // eslint-disable-next-line
    if (window.innerWidth > layout.breaks[headerCollapse]) {
      let placement =
        getParents(elm, `.${menu.classes.main}`, menu.classes.sub).length > 0
          ? "right-start"
          : "bottom-start";
      createPopper(elm, nextelm, {
        placement: placement,
        boundary: ".nk-wrap",
      });
    }
  };

  // dropdown close siblings
  let closeSiblings = function (elm) {
    let parent = elm.parentElement;
    let siblings = parent.parentElement.children;
    Array.from(siblings).forEach((item) => {
      if (item !== parent) {
        item.classList.remove(menu.classes.active);
        if (item.classList.contains(menu.classes.subparent)) {
          let subitem = item.querySelectorAll(`.${menu.classes.sub}`);
          subitem.forEach((child) => {
            child.parentElement.classList.remove(menu.classes.active);
            slideUp(child, 400);
          });
        }
      }
    });
  };

  let menuToggle = function (e) {
    e.preventDefault();
    let item = e.target.closest(`.${menu.classes.toggle}`);
    dropdownToggle(item);
    closeSiblings(item);
  };

  let menuHover = function (e) {
    e.preventDefault();
    let item = e.target.closest(`.${menu.classes.toggle}`);
    dropdownExtended(item);
    // dropdownToggle(item);
  };

  useEffect(() => {
    currentLink(`.${menu.classes.link}`);

    // Checking for Role
    if (localStorage.getItem("role") === "admin") {
      setModuleRows(modulesData);
    } else if (localStorage.getItem("role") === "crm") {
      setModuleRows(crmModulesData);
    } else if (localStorage.getItem("role") === "account") {
      setModuleRows(accountsModulesData);
    }

    // eslint-disable-next-line
  }, [null]);

  const { t } = useTranslation();

  return (
    <MenuList>
      {/* Hard Code Menu with mapcode Start */}

      <MenuItem sub>
        {showMenu.Test ? (
          <MenuItemLink
            text="Test"
            onClick={menuToggle}
            onMouseEnter={menuHover}
            sub
          />
        ) : null}

        <MenuSub>
          {showMenu.Test1 ? (
            <MenuItem>
              <MenuItemLink
                text="Test1"
                to="/seriui/stake-holder-registration"
              />
            </MenuItem>
          ) : null}
          {showMenu.Test2 ? (
            <MenuItem>
              <MenuItemLink
                text="Test2"
                to="/seriui/issue-new-reeler-license"
              />
            </MenuItem>
          ) : null}
        </MenuSub>
      </MenuItem>

      <MenuItem sub>
        <MenuItemLink
          text={t("admin")}
          onClick={menuToggle}
          onMouseEnter={menuHover}
          sub
        />
        <MenuSub>
          {showMenu.Admin_Master ? (
            <MenuItem sub>
              <MenuItemLink
                text="Master"
                onClick={menuToggle}
                onMouseEnter={menuHover}
                sub
              />
              <MenuSub>
                {showMenu.Admin_Master_Registration ? (
                  <MenuItem sub>
                    <MenuItemLink
                      text="Registration"
                      onClick={menuToggle}
                      onMouseEnter={menuHover}
                      sub
                    />
                    <MenuSub>
                      {showMenu.Admin_Master_Registration_User ? (
                        <MenuItem>
                          <MenuItemLink text="User" to="/seriui/user" />
                        </MenuItem>
                      ) : null}
                    </MenuSub>
                  </MenuItem>
                ) : null}
                {showMenu.Admin_Master_Registration ? (
                  <MenuItem>
                    <MenuItemLink text="Caste" to="/seriui/masters/caste" />
                  </MenuItem>
                ) : null}
                {showMenu.Admin_Master_Registration ? (
                  <MenuItem>
                    <MenuItemLink text="Skills" to="/seriui/masters/skills" />
                  </MenuItem>
                ) : null}
                {showMenu.Admin_Master_Registration ? (
                  <MenuItem>
                    <MenuItemLink text="State" to="/seriui/masters/state" />
                  </MenuItem>
                ) : null}
                {showMenu.Admin_Master_Registration ? (
                  <MenuItem>
                    <MenuItemLink
                      text="District"
                      to="/seriui/masters/district"
                    />
                  </MenuItem>
                ) : null}
                {showMenu.Admin_Master_Registration ? (
                  <MenuItem>
                    <MenuItemLink text="Taluk" to="/seriui/masters/taluk" />
                  </MenuItem>
                ) : null}
                {showMenu.Admin_Master_Registration ? (
                  <MenuItem>
                    <MenuItemLink text="City" to="/seriui/masters/city" />
                  </MenuItem>
                ) : null}
                {showMenu.Admin_Master_Registration ? (
                  <MenuItem>
                    <MenuItemLink
                      text="Course Name"
                      to="/seriui/masters/course_name"
                    />
                  </MenuItem>
                ) : null}
                {showMenu.Admin_Master_Registration ? (
                  <MenuItem>
                    <MenuItemLink
                      text="Education Level"
                      to="/seriui/masters/education_level"
                    />
                  </MenuItem>
                ) : null}
                {showMenu.Admin_Master_Registration ? (
                  <MenuItem>
                    <MenuItemLink
                      text="Institutuion Name"
                      to="/seriui/masters/institutuion_name"
                    />
                  </MenuItem>
                ) : null}
                {showMenu.Admin_Master_Registration ? (
                  <MenuItem>
                    <MenuItemLink
                      text="Recritment Company"
                      to="/seriui/masters/recritment_company"
                    />
                  </MenuItem>
                ) : null}
                {showMenu.Admin_Master_Registration ? (
                  <MenuItem>
                    <MenuItemLink
                      text="Recruitment Agency"
                      to="/seriui/masters/recruitment_agency"
                    />
                  </MenuItem>
                ) : null}
              </MenuSub>
            </MenuItem>
          ) : null}
        </MenuSub>
      </MenuItem>

      <MenuItem sub>
        {showMenu.job ? (
          <MenuItemLink
            text="Job"
            onClick={menuToggle}
            onMouseEnter={menuHover}
            sub
          />
        ) : null}

        <MenuSub>
          {showMenu.category ? (
            <MenuItem>
              <MenuItemLink text="Job Category" to="/seriui/job/category" />
            </MenuItem>
          ) : null}
          {showMenu.role ? (
            <MenuItem>
              <MenuItemLink text="Job Role" to="/seriui/job/role" />
            </MenuItem>
          ) : null}
          {showMenu.position ? (
            <MenuItem>
              <MenuItemLink text="Job Position" to="/seriui/job/position" />
            </MenuItem>
          ) : null}
          {showMenu.position ? (
            <MenuItem>
              <MenuItemLink text="Applicants" to="/seriui/job/applicant" />
            </MenuItem>
          ) : null}
          {showMenu.position ? (
            <MenuItem>
              <MenuItemLink
                text="Job Application"
                to="/seriui/job/job_application"
              />
            </MenuItem>
          ) : null}
        </MenuSub>
      </MenuItem>

      {/* Hard Code Menu with mapcode End */}
    </MenuList>
  );
}

export default Menu;
