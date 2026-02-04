package com.lma.dao;

import java.util.List;

import com.lma.model.UpdateRequest;

public interface UpdateRequestDAO {

    boolean createRequest(UpdateRequest request);

    boolean updateRequestStatus(int requestId, String status);

    List<UpdateRequest> getPendingRequests();

    List<UpdateRequest> getRequestsBySite(int siteId);
}
