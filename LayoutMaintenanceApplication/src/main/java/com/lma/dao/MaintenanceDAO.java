package com.lma.dao;

import java.util.List;

import com.lma.model.Maintenance;

public interface MaintenanceDAO {

    boolean generateMaintenance(Maintenance maintenance);

    Maintenance getMaintenanceById(int maintenanceId);

    Maintenance getMaintenanceBySiteAndMonth(int siteId, String month);

    List<Maintenance> getMaintenanceBySite(int siteId);

    boolean updateMaintenanceStatus(int maintenanceId, String status);
}
