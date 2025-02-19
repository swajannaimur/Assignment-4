function calculateVAT(price) {
    const result = price * 7.5 / 100
    if (typeof price !== "number" || price < 0) {
        return "Invalid"
    } else {
        return result;
    }
}


function validContact(contact) {
    if (typeof contact !== "string") {
        return "Invalid"
    }
    else if (!contact.includes(" ") && contact.length == 11 && contact.startsWith("01")) {
        return true
    }
    else {
        return false
    }
}


function willSuccess(marks) {
    if (!Array.isArray(marks)) {
        return "Invalid"
    }
    let passed = [];
    let failed = [];

    for (let mark of marks) {
        if (mark >= 50) {
            passed.push(mark)
        } else {
            failed.push(mark)
        }
    }
    if (passed.length > failed.length) {
        return true
    }
    else {
        return false
    }
}


function validProposal(person1, person2) {
    if (typeof person1 !== "object" || typeof person2 !== "object" || Array.isArray(person1) || Array.isArray(person2)) {
        return "Invalid"
    }

    let ageDiff = person1.age - person2.age

    if (person1.gender !== person2.gender && Math.abs(ageDiff) <= 7) {
        return true
    } else {
        return false
    }
}


function calculateSleepTime(times) {
    if (!Array.isArray(times)) {
        return "Invalid"
    }
    let sum = 0
    for (let time of times) {
        if (typeof time !== "number") {
            return "Invalid"
        }
        sum += time
    }
    const hours = Math.floor(sum / 3600)
    const minutes = Math.floor((sum % 3600) / 60)
    const seconds = Math.floor(sum % 60)
    const totalSleepTime = { hour: hours, minute: minutes, second: seconds }
    return totalSleepTime
}