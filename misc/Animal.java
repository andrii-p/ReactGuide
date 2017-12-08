package com.company;

public class Animal {

    private String name;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        com.company.Animal other = (com.company.Animal) o;
        if (isOneNullOtherNotNull(this.getName(), other.getName()) || isFirstNotEqualsSecond(this.getName(), other.getName())) return false;

        return true;
    }

    private boolean isOneNullOtherNotNull(Object x, Object y){
        return x == null ^ y == null;
    }

    private boolean isFirstNotEqualsSecond(Object first, Object second){
        return first != null && !first.equals(second);
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
