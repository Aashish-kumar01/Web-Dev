#include<stdio.h>

int main() {
    int n, i, j;
    int arrival_time[20], burst_time[20], waiting_time[20], turn_around_time[20], completion_time[20];
    float avg_waiting_time = 0, avg_turn_around_time = 0;

    printf("Enter the number of processes: ");
    scanf("%d", &n);

    printf("Enter arrival time and burst time for each process:\n");
    for(i = 0; i < n; i++) {
        printf("Process %d\n", i + 1);
        printf("Arrival time: ");
        scanf("%d", &arrival_time[i]);
        printf("Burst time: ");
        scanf("%d", &burst_time[i]);
    }

    // Sort processes by arrival time
    for(i = 0; i < n; i++) {
        for(j = i + 1; j < n; j++) {
            if(arrival_time[i] > arrival_time[j]) {
                // Swap arrival time
                int temp = arrival_time[i];
                arrival_time[i] = arrival_time[j];
                arrival_time[j] = temp;

                // Swap burst time
                temp = burst_time[i];
                burst_time[i] = burst_time[j];
                burst_time[j] = temp;
            }
        }
    }

    // Calculate completion time
    completion_time[0] = arrival_time[0] + burst_time[0];
    for(i = 1; i < n; i++) {
        if(arrival_time[i] > completion_time[i - 1]) {
            completion_time[i] = arrival_time[i] + burst_time[i];
        } else {
            completion_time[i] = completion_time[i - 1] + burst_time[i];
        }
    }

    // Calculate turnaround time and waiting time
    for(i = 0; i < n; i++) {
        turn_around_time[i] = completion_time[i] - arrival_time[i]; // Turnaround time = Completion time - Arrival time
        waiting_time[i] = turn_around_time[i] - burst_time[i]; // Waiting time = Turnaround time - Burst time

        avg_waiting_time += waiting_time[i];
        avg_turn_around_time += turn_around_time[i];
    }

    // Average waiting and turnaround time
    avg_waiting_time /= n;
    avg_turn_around_time /= n;

    // Output results
    printf("\nProcess\tArrival Time\tBurst Time\tWaiting Time\tTurnaround Time\tCompletion Time\n");
    for(i = 0; i < n; i++) {
        printf("%d\t\t%d\t\t%d\t\t%d\t\t%d\t\t%d\n", i + 1, arrival_time[i], burst_time[i], waiting_time[i], turn_around_time[i], completion_time[i]);
    }

    printf("\nAverage Waiting Time: %.2f", avg_waiting_time);
    printf("\nAverage Turnaround Time: %.2f\n", avg_turn_around_time);

    return 0;
}