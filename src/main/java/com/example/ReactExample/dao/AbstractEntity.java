package com.example.ReactExample.dao;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.envers.Audited;

import javax.persistence.*;
import java.util.Date;

@MappedSuperclass
public class AbstractEntity {

    @Column(name = "LastModified")
    @Temporal(TemporalType.TIMESTAMP)
    @Audited
    @JsonIgnore
    private Date lastModified;

    @Column(name = "Created")
    @Temporal(TemporalType.TIMESTAMP)
    @Audited
    @JsonIgnore
    private Date created;

    @Audited
    @JsonIgnore
    @OneToOne
    @JoinColumn(name = "UserId")
    private User user;


    @PrePersist
    public void prePersist() {
        this.created = new Date();
        this.lastModified = this.created;
    }

    @PreUpdate
    public void preUpdate() {
        this.lastModified = new Date();
    }



    public Date getLastModified() {
        return lastModified;
    }

    public void setLastModified(Date lastModified) {
        this.lastModified = lastModified;
    }

    public Date getCreated() {
        return created;
    }

    public void setCreated(Date created) {
        this.created = created;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
