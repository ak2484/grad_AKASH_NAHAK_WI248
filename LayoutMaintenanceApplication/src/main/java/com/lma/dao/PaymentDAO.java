package com.lma.dao;

import java.util.List;

import com.lma.model.Payment;

public interface PaymentDAO {

    boolean addPayment(Payment payment);

    List<Payment> getPaymentsByMaintenance(int maintenanceId);

    double getTotalPaidAmount(int maintenanceId);
}
