employeeService = (function () {

    var findById = function (id) {
            var deferred = $.Deferred();
            var employee = null;
            var l = employees.length;
            for (var i = 0; i < l; i++) {
                if (employees[i].id == id) {
                    employee = employees[i];
                    break;
                }
            }
            deferred.resolve(employee);
            return deferred.promise();
        },

        findByName = function (searchKey) {
            var deferred = $.Deferred();
            var results = employees.filter(function (element) {
                var fullName = element.firstName + " " + element.lastName;
                return fullName.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
            });
            deferred.resolve(results);
            return deferred.promise();
        },

        findByManager = function (managerId) {
            var deferred = $.Deferred();
            var results = employees.filter(function (element) {
                return managerId === element.managerId;
            });
            deferred.resolve(results);
            return deferred.promise();
        },

        employees = [
            {"id": 1, "firstName": "Pinchos", "lastName": "", "managerId": 0, "managerName": "", "reports": 4, "title": "Region Basque Country and Navarre", "department": "Corporate", "mobilePhone": "pastry", "officePhone": "a Christmas pastry", "email": "www.pincho.com", "city": "Boston, MA", "pic": "Pinchos.jpg", "twitterId": "@fakejking", "blog": "http://coenraets.org"},
            {"id": 2, "firstName": "Empanada", "lastName": "Taylor", "managerId": 1, "managerName": "James King", "reports": 2, "title": "Region Galicia", "department": "Marketing", "mobilePhone": "bread", "officePhone": "a meat pie", "email": "www.empanada.com", "city": "Boston, MA", "pic": "Empanda.jpg", "twitterId": "@fakejtaylor", "blog": "http://coenraets.org"},
            {"id": 3, "firstName": "Croquettes", "lastName": "", "managerId": 1, "managerName": "James King", "reports": 0, "title": "Region Andalusia", "department": "Accounting", "mobilePhone": "snack", "officePhone": "781-000-0003", "email": "www.croquettes.com", "city": "Boston, MA", "pic": "Croquettes.jpg", "twitterId": "@fakeelee", "blog": "http://coenraets.org"},
            {"id": 4, "firstName": "Churros", "lastName": "Williams", "managerId": 1, "managerName": "James King", "reports": 3, "title": "Region Canary Islands", "department": "Engineering", "mobilePhone": "puding", "officePhone": "781-000-0004", "email": "www.churros.com", "city": "Boston, MA", "pic": "Churros.jpg", "twitterId": "@fakejwilliams", "blog": "http://coenraets.org"},
            {"id": 5, "firstName": "Flan", "lastName": "Moore", "managerId": 1, "managerName": "James King", "reports": 2, "title": "Region Catalonia", "department": "Sales", "mobilePhone": "617-000-0005", "officePhone": "desert", "email": "www.flan.com", "city": "Boston, MA", "pic": "Flan.jpg", "twitterId": "@fakermoore", "blog": "http://coenraets.org"},
            {"id": 6, "firstName": "CremeBrulee", "lastName": "Jones", "managerId": 4, "managerName": "John Williams", "reports": 0, "title": "Region Catalonia", "department": "Engineering", "mobilePhone": "desert", "officePhone": "781-000-0006", "email": "www.cremebrulee.com", "city": "Boston, MA", "pic": "CremeBrulee.jpg", "twitterId": "@fakepjones", "blog": "http://coenraets.org"},
            {"id": 7, "firstName": "Marzipan", "lastName": "Gates", "managerId": 4, "managerName": "John Williams", "reports": 0, "title": "Region Toledo", "department": "Engineering", "mobilePhone": "confection", "officePhone": "781-000-0007", "email": "www.marzipan.com", "city": "Boston, MA", "pic": "Marzipan.jpg", "twitterId": "@fakepgates", "blog": "http://coenraets.org"},
        ];

    // The public API
    return {
        findById: findById,
        findByName: findByName,
        findByManager: findByManager
    };

}());