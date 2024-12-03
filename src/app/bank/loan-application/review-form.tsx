export default function ReviewForm({ data }) {
    return (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium">Personal Information</h3>
          <p>Full Name: {data.personalInfo.fullName}</p>
          <p>Email: {data.personalInfo.email}</p>
          <p>Phone: {data.personalInfo.phone}</p>
        </div>
        <div>
          <h3 className="text-lg font-medium">Loan Details</h3>
          <p>Loan Amount: ${data.loanDetails.loanAmount}</p>
          <p>Loan Purpose: {data.loanDetails.loanPurpose}</p>
          <p>Loan Term: {data.loanDetails.loanTerm} months</p>
        </div>
        <div>
          <h3 className="text-lg font-medium">Land Details (Collateral)</h3>
          <p>Land Size: {data.landDetails.landSize} acres</p>
          <p>Location: {data.landDetails.landLocation}</p>
          <p>Estimated Value: ${data.landDetails.landValue}</p>
          <p>Description: {data.landDetails.landDescription}</p>
        </div>
      </div>
    )
  }
  
  