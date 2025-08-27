// function to get innerText
function getText(id) {
  const element = document.getElementById(id);
  const elementText = element.innerText;
  return elementText;
}

// function to get innerTextNumber
function getTextNumber(id) {
  const element = document.getElementById(id);
  const elementNumber = Number(element.innerText);
  return elementNumber;
}

// heart counted functionality
document.getElementById("card-container").addEventListener('click', function (event) {
  if (event.target.classList.contains('heart-icon')) {
    const heartCountNumber = getTextNumber('heart-count');
    const heartCountIncrease = heartCountNumber + 1
    document.getElementById('heart-count').innerText = heartCountIncrease;
 }
})

const callHistory = [];

// call button functionality
document.getElementById("card-container").addEventListener('click', function (evn) {
  const callButton = evn.target.closest(".call-btn");

  const buttonParent = callButton.parentElement;
  console.log(buttonParent);
  const divParent = buttonParent.parentElement;
  console.log(divParent);

  const totalCoin = getTextNumber('coin-count');
  const remainingCoin = totalCoin - 20;
  if (remainingCoin < 0) {
    alert("You don't have much coin");
    return;
  }
  document.getElementById('coin-count').innerText = remainingCoin;

  const serviceName = divParent.children[0].children[0].innerText;

  const serviceNumber = divParent.children[1].children[0].innerText;

  const currentTime = new Date().toLocaleTimeString();

  alert(`📞 Calling ${serviceName} ${serviceNumber}`);

  const callObj = {
    name: serviceName,
    number: serviceNumber,
    date: currentTime
  }
  callHistory.push(callObj);
  
  for (const call of callHistory) {
    const newElement = document.createElement('div');
    newElement.innerHTML = `
      <div class="flex justify-between items-center px-1 py-3 bg-[#FAFAFA] rounded-lg">
              <div>
                <h4 class="text-base font-semibold text-[#111111]">${call.name}</h4>
                <p class="text-[#5C5C5C]">${call.number}</p>
              </div>
              <span class="text-[#111111]">${call.date}</span>
            </div>
    `
    const callHistoryParent = document.getElementById('call-history-parent');
    callHistoryParent.appendChild(newElement);
  }
  callHistory.pop();
})

// clear history functionality
document.getElementById("clear-btn").addEventListener('click', function () {
  document.getElementById('call-history-parent').innerText = "";
})

// copy button functionality
document.getElementById('card-container').addEventListener('click', function (e) {
  const copyButton = e.target.closest(".copy-btn");

  const buttonParent = copyButton.parentElement;
  const divParent = buttonParent.parentElement;
  const number = divParent.children[1].children[0].innerText;
  navigator.clipboard.writeText(number);
  
  const currentCopy = getTextNumber('copy-count');
  const totalCopy = currentCopy + 1;
  document.getElementById('copy-count').innerText = totalCopy;
})