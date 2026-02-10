
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.function.Predicate;
import java.util.stream.Collectors;

enum Gender {
    MALE,
    FEMALE
}

class Emp {

    String name;
    int age;
    Gender gender;
    int salary;
    String designation;
    String department;

    Emp(String n, int a, int s, Gender g, String desig, String dept) {
        name = n;
        age = a;
        salary = s;
        gender = g;
        designation = desig;
        department = dept;
    }

    @Override
    public String toString() {
        return "Emp{"
                + "name='" + name + '\''
                + ", age=" + age
                + ", gender=" + gender
                + ", salary=" + salary
                + ", designation='" + designation
                + ", department=" + department + '\''
                + '}' + '\n';
    }

}

public class EmpMain {

    public static void main(String[] args) {

        List<Emp> list = new ArrayList<Emp>();

        list.add(new Emp("Rakesh", 28, 32000, Gender.MALE, "PROGRAMMER", "IT"));
        list.add(new Emp("Suresh", 35, 45000, Gender.MALE, "MANAGER", "HR"));
        list.add(new Emp("Mahesh", 30, 38000, Gender.MALE, "CLERK", "QA"));
        list.add(new Emp("Rajesh", 26, 30000, Gender.MALE, "PROGRAMMER", "IT"));
        list.add(new Emp("Dinesh", 40, 50000, Gender.MALE, "MANAGER", "ADMIN"));

        list.add(new Emp("Priya", 25, 28000, Gender.FEMALE, "CLERK", "QA"));
        list.add(new Emp("Meena", 32, 42000, Gender.FEMALE, "MANAGER", "IT"));
        list.add(new Emp("Kavya", 29, 35000, Gender.FEMALE, "PROGRAMMER", "IT"));
        list.add(new Emp("Anita", 38, 47000, Gender.FEMALE, "MANAGER", "FINANCE"));
        list.add(new Emp("Savita", 24, 26000, Gender.FEMALE, "CLERK", "CUSTOMER CARE"));

        list.add(new Emp("Rohit", 27, 31000, Gender.MALE, "PROGRAMMER", "IT"));
        list.add(new Emp("Amit", 33, 43000, Gender.MALE, "MANAGER", "IT"));
        list.add(new Emp("Kiran", 29, 34000, Gender.MALE, "CLERK", "QA"));
        list.add(new Emp("Naveen", 36, 48000, Gender.MALE, "MANAGER", "SALES"));
        list.add(new Emp("Yogesh", 23, 25000, Gender.MALE, "CLERK", "CUSTOMER CARE"));

        list.add(new Emp("Shreya", 31, 41000, Gender.FEMALE, "MANAGER", "HR"));
        list.add(new Emp("Pooja", 37, 46000, Gender.FEMALE, "MANAGER", "HR"));
        list.add(new Emp("Sneha", 28, 33000, Gender.FEMALE, "PROGRAMMER", "IT"));
        list.add(new Emp("Vidya", 34, 44000, Gender.FEMALE, "MANAGER", "QA"));
        list.add(new Emp("Rina", 22, 24000, Gender.FEMALE, "CLERK", "IT"));

        list.add(new Emp("Kunal", 26, 29000, Gender.MALE, "CLERK", "QA"));
        list.add(new Emp("Harish", 45, 52000, Gender.MALE, "CEO", "OPERATIONS"));
        list.add(new Emp("Lokesh", 38, 49000, Gender.MALE, "MANAGER", "IT"));
        list.add(new Emp("Manoj", 27, 30500, Gender.MALE, "PROGRAMMER", "IT"));
        list.add(new Emp("Sanjay", 30, 36000, Gender.MALE, "CLERK", "FINANCE"));

        // *Find the highest salary paid Employee
        List<Emp> emp1 = list.stream()
                .sorted((e1, e2) -> Integer.compare(e2.age, e1.age))
                .limit(1)
                .toList();
        System.out.println("Employee with highest salary : " + emp1);
        System.out.println("---------------------");

        // *Find how many male & Female employee working in the company(numbers)
        Map<String, Long> emp2 = list.stream()
                .collect(Collectors.groupingBy(e -> String.valueOf(e.gender), Collectors.counting()));
        System.out.println("Count of MALE & FEMALE Employee : " + emp2);
        System.out.println("---------------------");

        // *Total expense for the company department wise
        Map<String, Integer> emp3 = list.stream().collect(Collectors.groupingBy(e -> e.department, Collectors.summingInt(e -> e.salary)));
        System.out.println("Total expense Department wise : ");
        System.out.println(emp3);
        System.out.println("------------------------");

        // *Who is the top 5 senior most employee in the company
        List<Emp> emp4 = list.stream().sorted((e1, e2) -> Integer.compare(e2.age, e1.age)).limit(5).toList();

        // List<String> emp4 = list.stream()
        //         .sorted((e1, e2) -> Integer.compare(e2.age, e1.age)) // DESC (senior most first)
        //         .limit(5)
        //         .map(e -> e.name)
        //         .toList();
        System.out.println("5 senior most employee in the company :");
        System.out.println(emp4);
        System.out.println("------------------------");

        // *Find only the name the employee how designation is manager
        Predicate<Emp> p1 = (e -> e.designation.equals("MANAGER"));
        List<String> emp5 = list.stream()
                .filter(p1)
                .map(e -> e.name)
                .toList();
        System.out.print("MANAGERS : ");
        System.out.println(emp5);
        System.out.println("----------------------");

        // *Hike the salary by 20% for everyone except manager
        List<Emp> emp6 = list.stream()
                .filter(p1.negate()).toList();
        emp6.forEach(e -> e.salary += 0.2 * e.salary);
        System.out.println("Hike in salary for employee other than MANAGER :");
        System.out.println(emp6);
        System.out.println("----------------------");

        // *Find the total number of Employee
        System.out.println("Total Employee : " + list.size());

    }
}
