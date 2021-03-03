import React from 'react'
import styled from 'styled-components';


const Candidate = (props) => {
    const approveCandidate = () => {
        props.decideCandidate(true, props.candidate.id)
    }

    const rejectCandidate = () => {
        props.decideCandidate(false, props.candidate.id)
    }

    return <div>
        <p>{props.candidate.name}</p>
        <div>
            <button  onClick={approveCandidate}/>
            <button  on Click={rejectCandidate}/>
        </div>

    </div>
}

export default Candidate; 