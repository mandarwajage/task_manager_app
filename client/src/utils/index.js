export function getInitials(fullName) {

  const names = fullName.split(" ");

  const intials = names.slice(0, 2).map((name) => name[0].toUpperCase());

  const initialsStr = intials.join("");

  return initialsStr;
}

