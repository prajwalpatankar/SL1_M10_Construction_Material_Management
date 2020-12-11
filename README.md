# setting up

      $ cd SL1_M10_Construction_Material_Management-master
      $ npm install

# For initialising on windows
\sql
Mysql SQL>  \connect root@localhost

# storing the database on Windows
      Copy the "construction_material_management.sql" file into C:\Windows\System32\
      open cmd in admin mode
      > set path=C:\Program Files\MySQL\MySQL Server 8.0\bin
      > mysql -u root -p construction_material_management < construction_material_management.sql
      
# storing the database on Linux
      $ sudo mysql -u root -p construction_material_management < construction_material_management.sql
