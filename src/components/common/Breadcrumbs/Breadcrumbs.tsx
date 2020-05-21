import React from "react";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { BreadcrumbsProps } from "./Breadcrumbs.types";
import { BreadcrumbWrap } from "./Breadcrumbs.styled";
import { selectMenuItemLink } from "../../HeaderMenu/__redux/HeaderMenu.actions";

const Breadcrumbs: React.FunctionComponent<BreadcrumbsProps> = ({
  breadcrumbs,
  redirect
}) => {
  const dispatch = useDispatch();

  const onClick = (link: string) => (e: React.SyntheticEvent) =>
    dispatch(selectMenuItemLink(link));

  return (
    <BreadcrumbWrap>
      {breadcrumbs.map((b, index) => {
        return (
          <Breadcrumb.Item key={index}>
            {index === breadcrumbs.length - 1 ? (
              b.title
            ) : (
              <Link
                to={b.link}
                onClick={redirect ? onClick(b.link) : undefined}
              >
                {b.title}
              </Link>
            )}
          </Breadcrumb.Item>
        );
      })}
    </BreadcrumbWrap>
  );
};

export default Breadcrumbs;
