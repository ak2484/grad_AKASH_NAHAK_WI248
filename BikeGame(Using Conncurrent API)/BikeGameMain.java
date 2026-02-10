
// import java.time.LocalTime;
// import java.util.Random;
// import java.util.Scanner;
// import java.util.concurrent.CountDownLatch;
// import java.util.concurrent.ExecutorService;
// import java.util.concurrent.Executors;
// import java.util.concurrent.locks.ReentrantLock;
// class RaceControl {
//     static final Object LOCK = new Object();
//     static boolean startRace = false;
// }
// class Game {
//     private int distanceToCovered;
//     private int numberOfBiker;
//     public Game() {
//         System.out.print("Enter Distance to be covered (KM) : ");
//         distanceToCovered = new Scanner(System.in).nextInt();
//         distanceToCovered *= 1000;
//         System.out.print("Enter Number of bikers : ");
//         numberOfBiker = new Scanner(System.in).nextInt();
//     }
//     public void startRace() throws Exception {
//         ThreadGroup tg = new ThreadGroup("BikeRace");
//         int count = numberOfBiker;
//         ReentrantLock lock = new ReentrantLock();
//         ExecutorService es = Executors.newFixedThreadPool(count);
//         CountDownLatch cdl = new CountDownLatch(5);
//         Biker[] bikers = new Biker[count];
//         Thread[] threads = new Thread[count];
//         for (int i = 0; i < bikers.length; i++) {
//             bikers[i] = new Biker(cdl, lock, distanceToCovered);
//             threads[i] = new Thread(tg, bikers[i]);
//             threads[i].start();
//         }
//         System.out.println("\nAll bikers are READY and waiting...");
//         System.out.println("Race starts in:");
//         RaceControl.startRace = true;
//         for (int i = 5; i >= 0; i--) {
//             System.out.println(i);
//             try {
//                 cdl.countDown();
//                 Thread.sleep(1000);
//             } catch (Exception e) {
//                 System.out.println(e);
//             }
//         }
//         // WAIT FOR ALL BIKERS TO FINISH
//         // for (Thread t : threads) {
//         //     t.join();
//         // }
//         // SHOW DASHBOARD
//         lock.lock();
//         showDashboard(lock, bikers);
//     }
//     private void showDashboard(ReentrantLock lock, Biker[] bikers) {
//         lock.unlock();
//         // Sort by end time (finish order)
//         java.util.Arrays.sort(bikers,
//                 (b1, b2) -> b1.getEndTime().compareTo(b2.getEndTime()));
//         System.out.println("\n================ FINAL DASHBOARD ================");
//         System.out.println("Rank\tName\tStart Time\t\tEnd Time\t\tTime Taken(ms)");
//         int rank = 1;
//         for (Biker b : bikers) {
//             System.out.println(
//                     rank++ + "\t"
//                     + b.getName() + "\t"
//                     + b.getStartTime() + "\t"
//                     + b.getEndTime() + "\t"
//                     + b.getTimeTaken()
//             );
//         }
//     }
// }
// class Biker implements Runnable {
//     private String name;
//     private int distanceCovered = 0;
//     private int totalDistance;
//     private int speed;
//     private LocalTime startTime;
//     private LocalTime endTime;
//     private CountDownLatch cdl;
//     private ReentrantLock lock;
//     Biker(CountDownLatch c, ReentrantLock l, int totalDistance) {
//         cdl = c;
//         lock = l;
//         Scanner sc = new Scanner(System.in);
//         System.out.print("Enter Biker Name: ");
//         name = sc.next();
//         this.totalDistance = totalDistance;
//         speed = new Random().nextInt(200) + 100;
//     }
//     @Override
//     public void run() {
//         try {
//             while (!RaceControl.startRace) {
//                 try {
//                     cdl.await();
//                 } catch (Exception e) {
//                     e.printStackTrace();
//                 }
//             }
//             startTime = LocalTime.now();
//             while (distanceCovered < totalDistance) {
//                 distanceCovered += 100;
//                 System.out.println(name + " covered " + distanceCovered + " meters");
//                 Thread.sleep(300);
//             }
//             endTime = LocalTime.now();
//             System.out.println(name + " FINISHED");
//             lock.lock();
//         } catch (Exception e) {
//             e.printStackTrace();
//         }
//     }
//     public String getName() {
//         return name;
//     }
//     public LocalTime getStartTime() {
//         return startTime;
//     }
//     public LocalTime getEndTime() {
//         return endTime;
//     }
//     public long getTimeTaken() {
//         return java.time.Duration.between(startTime, endTime).toMillis();
//     }
// }
// public class BikeGameMain {
//     public static void main(String[] args) throws Exception {
//         System.out.println(" Bike Racing Game Started \n");
//         Game game = new Game();
//         game.startRace();
//     }
// }
import java.time.Duration;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Random;
import java.util.Scanner;
import java.util.concurrent.Callable;
import java.util.concurrent.CountDownLatch;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;

class Biker implements Callable<Biker> {

    private String name;
    private int totalDistance;
    private int distanceCovered = 0;
    private int speed;
    private LocalTime startTime;
    private LocalTime endTime;
    private CountDownLatch cdl;

    public Biker(String name, CountDownLatch c, int totalDistance) {
        this.cdl = c;
        this.name = name;
        this.totalDistance = totalDistance;
        this.speed = new Random().nextInt(200) + 100;
    }

    @Override
    public Biker call() throws Exception {
        cdl.await();

        System.out.println(name + " started race!");
        startTime = LocalTime.now();

        while (distanceCovered < totalDistance) {
            distanceCovered += 100;
            System.out.println(name + " covered " + distanceCovered + " meters");
            Thread.sleep(300);
        }

        endTime = LocalTime.now();
        System.out.println(name + " FINISHED");

        return this;
    }

    public String getName() {
        return name;
    }

    public LocalTime getStartTime() {
        return startTime;
    }

    public LocalTime getEndTime() {
        return endTime;
    }

    public long getTimeTaken() {
        return Duration.between(startTime, endTime).toMillis();
    }
}

class Game {

    private int distanceToCovered;
    private int numberOfBiker;

    public Game() {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter Distance (KM): ");
        distanceToCovered = sc.nextInt() * 1000;

        System.out.print("Enter Number of bikers: ");
        numberOfBiker = sc.nextInt();
    }

    public void startRace() throws Exception {

        ExecutorService executor = Executors.newFixedThreadPool(numberOfBiker);
        CountDownLatch cdl = new CountDownLatch(3);
        List<Future<Biker>> futures = new ArrayList<>();
        List<Biker> bikers = new ArrayList<>();

        Scanner sc = new Scanner(System.in);

        List<Biker> bikerTasks = new ArrayList<>();

// Step 1: Take all inputs first
        for (int i = 0; i < numberOfBiker; i++) {
            System.out.print("Enter biker name: ");
            String name = sc.next();
            bikerTasks.add(new Biker(name, cdl, distanceToCovered));
        }

        System.out.println("\nAll bikers ready!");
        System.out.println("Race starting in 3 seconds...\n");
        for (int i = 3; i >= 1; i--) {
            System.out.println(i);
            cdl.countDown();
            Thread.sleep(1000);
        }

// Step 2: Start race together
        for (Biker biker : bikerTasks) {
            futures.add(executor.submit(biker));
        }

        System.out.println("\nRace Started...\n");

        // Wait for all bikers to finish
        for (Future<Biker> future : futures) {
            bikers.add(future.get());
        }

        executor.shutdown();

        showDashboard(bikers);
    }

    private void showDashboard(List<Biker> bikers) {

        bikers.sort(Comparator.comparing(Biker::getEndTime));

        System.out.println("\n========== FINAL DASHBOARD ==========");
        System.out.println("Rank\tName\tStart Time\t\tEnd Time\t\tTime(ms)");

        int rank = 1;
        for (Biker b : bikers) {
            System.out.println(rank++ + "\t"
                    + b.getName() + "\t"
                    + b.getStartTime() + "\t"
                    + b.getEndTime() + "\t"
                    + b.getTimeTaken());
        }
    }
}

public class BikeGameMain {

    public static void main(String[] args) throws Exception {
        System.out.println("Bike Racing Game Started\n");
        Game game = new Game();
        game.startRace();
    }
}
