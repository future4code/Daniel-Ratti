import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import Header from "../Header/Header"

const MainContainer = styled.section`
  margin: auto;
  margin-top: 10vh;
  width: 35vw;
  display: flex;
  flex-direction: column;
  background-color: white;
  text-align: flex-start;
  align-items: flex-start;
  border-radius: 10px;
  padding: 2vh 1vw;
  box-shadow: 1px 1px 10px 1px black;
`;

const Candidate = styled.section``;

export default function TripDetailsPage() {
  const [tripDetails, setTripDetails] = useState({});
  const token = localStorage.getItem("token");
  const pathParams = useParams();

  const getTripDetails = () => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/daniel-ratti-epps/trip/${pathParams.id}`,
        {
          headers: {
            auth: token,
          },
        }
      )
      .then((res) => {
        setTripDetails(res.data.trip);
      })

      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    getTripDetails();
    console.log(tripDetails);
  }, []);

  const decideCandidate = (candidateId, response) => {
    const body = {
      approve: response,
    };

    axios
      .put(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/daniel-ratti-epps/trips/${pathParams.id}/candidates/${candidateId}/decide`,
        body,
        {
          headers: {
            auth: token,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        getTripDetails();
      })

      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
      <div>
          <Header />
    <MainContainer>
      <h2>{tripDetails.name}</h2>

      <h2>Informações da viagem:</h2>
      <section>
        <article>
          <p>
            <b>Destino:</b> {tripDetails.planet}
          </p>
        </article>

        <article>
          <p>
            <b>Duração:</b> {tripDetails.durationInDays} dias
          </p>
        </article>

        <article>
          <p>
            <b>Descrição:</b> {tripDetails.description}
          </p>
        </article>

        <article>
          <p>
            <b>Data:</b> {tripDetails.date}
          </p>
        </article>
      </section>

      <h2>Candidatos:</h2>
      <section>
        {tripDetails.approved && tripDetails.approved[0] ? (
          tripDetails.approved.map((candidate) => {
            return (
              <article>
                <p>
                  {candidate.name}, {candidate.age} anos, {candidate.country}
                </p>
              </article>
            );
          })
        ) : (
          <p>Nenhum candidato aprovado</p>
        )}
      </section>

      <section>
        <h2>Inscrições para analise:</h2>
        {console.log(tripDetails)}

        {tripDetails.candidates && tripDetails.candidates[0] ? (
          tripDetails.candidates.map((candidate) => {
            return (
              <Candidate>
                <div>
                  <article>
                    <p>
                      <b>Nome:</b> {candidate.name}
                    </p>
                    <p>
                      <b>Idade:</b> {candidate.age} anos
                    </p>
                    <p>
                      <b>Justificativa:</b> {candidate.applicationText}
                    </p>
                    <p>
                      <b>Profissão:</b> {candidate.profession}
                    </p>
                    <p>
                      <b>País:</b> {candidate.country}
                    </p>
                  </article>
                  <>
                    <Button
                      style={{
                        marginRight: "10px",
                      }}
                      variant="contained"
                      color="secondary"
                      startIcon={<DeleteIcon />}
                      onClick={() => decideCandidate(candidate.id, true)}
                    >
                      Delete
                    </Button>

                    <Button
                      onClick={() => decideCandidate(candidate.id, false)}
                      variant="contained"
                      color="primary"
                    >
                      Aprovar
                    </Button>
                  </>
                </div>
              </Candidate>
            );
          })
        ) : (
          <p>Nenhum candidato inscrito</p>
        )}
      </section>
    </MainContainer>
    </div>
  );
}
