import styled from "styled-components";
import Spinner from "./Spinner";
import { useUser } from "../features/authentication/useuser";
import { useNavigate } from "react-router";
import { useEffect } from "react";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  //1 Load the authenticated user
  const { isLoading, isAuthenticated } = useUser();

  //2 If the user is not authenticated, redirect to /login
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [isAuthenticated, isLoading, navigate]
  );

  //3 While loading, show a spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  //4 If the user is authenticated, show the children

  if (isAuthenticated) return children;
}

export default ProtectedRoute;
