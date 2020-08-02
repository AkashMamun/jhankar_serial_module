document.getElementById('issueInputForm').addEventListener('submit',submitIssue);

function submitIssue(e){
    const getInputValue = id => document.getElementById(id).value;
    const description = getInputValue('issueDescription');
    const severity = getInputValue('issueSeverity');
    const assignedTo = getInputValue('issueAssignedTo');
    const id = Math.floor(Math.random()*100000000) + '';
    const status = 'Open';

    const issue = {id,description,severity,assignedTo,status};
    let issues = [];
    if(localStorage.getItem(issues)){
        issues = JSON.parse(localStorage.getItem('issues'));

    }
    if(id && description && severity && assignedTo){
        issues.push(issue);
        localStorage.setItem('issues', JSON.stringify(issues));

    }
    else{
        alert("Fields Must not be Empty!");
    }
    document.getElementById('issueInputForm').reset();
    fetchIssues();
    e.preventDefault();
}


document.getElementById('issueInputForm').addEventListener('submit',issueSubmit);

function issueSubmit(e){
    const getInputNumber = id=>document.getElementById(id).value;
    const description = getInputNumber('issueDescription');
    const severity = getInputNumber('issueDescription');
    const assignedTo = getInputNumber('issueAssigenedTo');
    const id = Math.floor(Math.random()*1000000000)+ '';
    const status = 'Open';

    const issue = {id,description, severity, assignedTo,status};
    let issues = [];
    if(loclaStorage.getItem('issues')){
        issues = JSON.parse(localStorage.getItem('issues'));

    }
    if(id && description && severity && assignedTo){
        issues.push(issue);
        localStorage.setItem('issues',JSON.stringify(issues));

    }
    else{
        alert("Fileds Must not be Empty!");
    }

    document.getElementById('issueInputForm').reset();
    fetchIssues();
    e.preventDefault();


}





















