export const getMappedLibrary = (library) => {
  const {
    fullname: fullName,
    territory,
    address,
    libraries,
    libraries_computers: librariesWithComputers,
    users,
    users_children: childrenUsers,
    employees_staff: employeesStaff,
    employees: employeesTotal,
    subscribers,
    visits: visiters,
    visits_sites: internetVisiters,
  } = library;

  return {
    fullName,
    territory,
    address,
    libraries,
    librariesWithComputers,
    users,
    childrenUsers,
    employeesStaff,
    employeesTotal,
    subscribers,
    visiters,
    internetVisiters,
  }
};
